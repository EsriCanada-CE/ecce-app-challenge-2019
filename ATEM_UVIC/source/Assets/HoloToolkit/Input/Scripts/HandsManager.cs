// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See LICENSE in the project root for license information.

using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.WSA.Input;

namespace Academy.HoloToolkit.Unity
{
    /// <summary>
    /// HandsDetected determines if the hand is currently detected or not.
    /// </summary>
    public partial class HandsManager : Singleton<HandsManager>
    {
        /// <summary>
        /// HandDetected tracks the hand detected state.
        /// Returns true if the list of tracked hands is not empty.
        /// </summary>
        public bool HandDetected
        {
            get { return trackedHands.Count > 0; }
        }

        public GameObject FocusedGameObject { get; private set; }

        private List<uint> trackedHands = new List<uint>();

        void Awake()
        {
            InteractionManager.InteractionSourceDetected += InteractionManager_InteractionSourceDetected;
            InteractionManager.InteractionSourceLost += InteractionManager_InteractionSourceLost;
            //来源被按下    
            InteractionManager.InteractionSourcePressed += InteractionManager_InteractionSourcePressed;
            //被释放    
            InteractionManager.InteractionSourceReleased += InteractionManager_InteractionSourceReleased;
            FocusedGameObject = null;

        }

        //手势释放时，将被关注的物体置空    
        private void InteractionManager_InteractionSourceReleased(InteractionSourceReleasedEventArgs args)
        {
            FocusedGameObject = null;
        }
        //识别到手指按下时，将凝视射线关注的物体置为当前手势操作的对象    
        private void InteractionManager_InteractionSourcePressed(InteractionSourcePressedEventArgs args)
        {
            if (GazeManager.Instance.Hit)
            {
                FocusedGameObject = GazeManager.Instance.HitInfo.collider.gameObject;
            }
        }

        private void InteractionManager_InteractionSourceDetected(InteractionSourceDetectedEventArgs args)
        {
            // Check to see that the source is a hand.
            if (args.state.source.kind != InteractionSourceKind.Hand)
            {
                return;
            }

            trackedHands.Add(args.state.source.id);
        }

        private void InteractionManager_InteractionSourceLost(InteractionSourceLostEventArgs args)
        {
            // Check to see that the source is a hand.
            if (args.state.source.kind != InteractionSourceKind.Hand)
            {
                return;
            }

            if (trackedHands.Contains(args.state.source.id))
            {
                trackedHands.Remove(args.state.source.id);
            }
            FocusedGameObject = null;
        }

        void OnDestroy()
        {
            InteractionManager.InteractionSourceDetected -= InteractionManager_InteractionSourceDetected;
            InteractionManager.InteractionSourceLost -= InteractionManager_InteractionSourceLost;
            InteractionManager.InteractionSourcePressed -= InteractionManager_InteractionSourcePressed; 
            InteractionManager.InteractionSourceReleased -= InteractionManager_InteractionSourceReleased;

        }
    }
}