// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See LICENSE in the project root for license information.

using UnityEngine;
using UnityEngine.XR.WSA.Input;

namespace Academy.HoloToolkit.Unity
{
    /// <summary>
    /// GestureManager creates a gesture recognizer and signs up for a tap gesture.
    /// When a tap gesture is detected, GestureManager uses GazeManager to find the game object.
    /// GestureManager then sends a message to that game object.
    /// </summary>
    [RequireComponent(typeof(GazeManager))]
    public partial class GestureManager : Singleton<GestureManager>
    {
        /// <summary>
        /// To select even when a hologram is not being gazed at,
        /// set the override focused object.
        /// If its null, then the gazed at object will be selected.
        /// </summary>
        public GameObject OverrideFocusedObject
        {
            get; set;
        }

        /// <summary>
        /// Gets the currently focused object, or null if none.
        /// </summary>
        public GameObject FocusedObject
        {
            get { return focusedObject; }
        }

        public bool IsNavigating { get; private set; }
        public bool IsManipulating { get; private set; }
        public Vector3 NavigationPosition { get; private set; }
        public Vector3 ManipulationPosition { get; private set; }

        private GestureRecognizer gestureRecognizer;
        private GameObject focusedObject;

        void Start()
        {
            // Create a new GestureRecognizer. Sign up for tapped events.
            gestureRecognizer = new GestureRecognizer();
            gestureRecognizer.SetRecognizableGestures(GestureSettings.Tap | GestureSettings.Hold | GestureSettings.ManipulationTranslate);

            gestureRecognizer.Tapped += GestureRecognizer_Tapped;

            //订阅Manipulation gesture事件  
            gestureRecognizer.HoldStartedEvent += GestureRecognizer_HoldStartedEvent;
            gestureRecognizer.HoldCompletedEvent += GestureRecognizer_HoldCompletedEvent;
            

            gestureRecognizer.ManipulationStartedEvent += GestureRecognizer_ManipulationStartedEvent;
            gestureRecognizer.ManipulationUpdatedEvent += GestureRecognizer_ManipulationUpdatedEvent;
            gestureRecognizer.ManipulationCompletedEvent += GestureRecognizer_ManipulationCompletedEvent;
            gestureRecognizer.ManipulationCanceledEvent += GestureRecognizer_ManipulationCanceledEvent;
            

            // Start looking for gestures.
            gestureRecognizer.StartCapturingGestures();
        }
        
        private void GestureRecognizer_ManipulationStartedEvent(InteractionSourceKind source, Vector3 cumulativeDelta, Ray headRay)
        {
            //当被关注的对象非空时，设置初始位置  
            if (HandsManager.Instance.FocusedGameObject != null)
            {
                IsManipulating = true;
				
                ManipulationPosition = cumulativeDelta;

                HandsManager.Instance.FocusedGameObject.SendMessageUpwards("PerformManipulationStart", cumulativeDelta);
            }
        }

        private void GestureRecognizer_ManipulationUpdatedEvent(InteractionSourceKind source, Vector3 cumulativeDelta, Ray headRay)
        {
            //当被关注的对象非空时，更新新的位置  
            if (HandsManager.Instance.FocusedGameObject != null)
            {
                IsManipulating = true;
				
                ManipulationPosition = cumulativeDelta;

                HandsManager.Instance.FocusedGameObject.SendMessageUpwards("PerformManipulationUpdate", cumulativeDelta);
            }
        }

        private void GestureRecognizer_ManipulationCompletedEvent(InteractionSourceKind source, Vector3 cumulativeDelta, Ray headRay)
        {
		    IsManipulating = false;
        }

        private void GestureRecognizer_ManipulationCanceledEvent(InteractionSourceKind source, Vector3 cumulativeDelta, Ray headRay)
        {
            IsManipulating = false;
        }



        private void GestureRecognizer_NavigationCanceledEvent(InteractionSourceKind source, Vector3 normalizedOffset, Ray headRay)
        {
            IsNavigating = false;
        }

        private void GestureRecognizer_NavigationCompletedEvent(InteractionSourceKind source, Vector3 normalizedOffset, Ray headRay)
        {
            IsNavigating = false; 
        }

        private void GestureRecognizer_NavigationUpdatedEvent(InteractionSourceKind source, Vector3 normalizedOffset, Ray headRay)
        {
            if (HandsManager.Instance.FocusedGameObject != null)
            {
                IsNavigating = true;
                NavigationPosition = normalizedOffset;
                HandsManager.Instance.FocusedGameObject.SendMessageUpwards("PerformZoomUpdate", normalizedOffset, SendMessageOptions.DontRequireReceiver);
            }
        }

        private void GestureRecognizer_NavigationStartedEvent(InteractionSourceKind source, Vector3 normalizedOffset, Ray headRay)
        {
            if (HandsManager.Instance.FocusedGameObject != null)
            {
                IsNavigating = true;
                NavigationPosition = normalizedOffset;
                HandsManager.Instance.FocusedGameObject.SendMessageUpwards("PerformNavigationStart", normalizedOffset, SendMessageOptions.DontRequireReceiver);
            }
        }

        private void GestureRecognizer_Tapped(TappedEventArgs args)
        {
            if (focusedObject != null)
            {
                focusedObject.SendMessage("OnSelect");
            }
        }
  
  
  
  
        private void GestureRecognizer_HoldStartedEvent(InteractionSourceKind source, Ray headRay)
        {
            if (focusedObject != null)
            {
                focusedObject.SendMessage("OnHold");
            }
        }

        private void GestureRecognizer_HoldCompletedEvent(InteractionSourceKind source, Ray headRay)
        {
		
		}
		
		
		
		

        void LateUpdate()
        {
            GameObject oldFocusedObject = focusedObject;

            if (GazeManager.Instance.Hit &&
                OverrideFocusedObject == null &&
                GazeManager.Instance.HitInfo.collider != null)
            {
                // If gaze hits a hologram, set the focused object to that game object.
                // Also if the caller has not decided to override the focused object.
                focusedObject = GazeManager.Instance.HitInfo.collider.gameObject;
            }
            else
            {
                // If our gaze doesn't hit a hologram, set the focused object to null or override focused object.
                focusedObject = OverrideFocusedObject;
            }

            if (focusedObject != oldFocusedObject)
            {
                // If the currently focused object doesn't match the old focused object, cancel the current gesture.
                // Start looking for new gestures.  This is to prevent applying gestures from one hologram to another.
                gestureRecognizer.CancelGestures();
                gestureRecognizer.StartCapturingGestures();
            }
        }

        void OnDestroy()
        {
            gestureRecognizer.StopCapturingGestures();
            gestureRecognizer.Tapped -= GestureRecognizer_Tapped;
            
            gestureRecognizer.HoldStartedEvent -= GestureRecognizer_HoldStartedEvent;
            gestureRecognizer.HoldCompletedEvent -= GestureRecognizer_HoldCompletedEvent;
            gestureRecognizer.ManipulationStartedEvent -= GestureRecognizer_ManipulationStartedEvent;
            gestureRecognizer.ManipulationUpdatedEvent -= GestureRecognizer_ManipulationUpdatedEvent;
            gestureRecognizer.ManipulationCompletedEvent -= GestureRecognizer_ManipulationCompletedEvent;
            gestureRecognizer.ManipulationCanceledEvent -= GestureRecognizer_ManipulationCanceledEvent;
            
        }
    }
}