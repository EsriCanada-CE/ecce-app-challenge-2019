public class CarGasLossStat{

    //these data are for the cars(in Canadian dollars)
    private double CarunitFuelWastageIntersectionCost= 0.02 ;
    private double CarunitFuelWastageBusStopsCost= 0.005 ;

    //this is just an empty constructor
    public CarGasLossStat(){}


    //this method take the number of intersection. zebracross and busstops as parameters
    //then calculates the total monetary loss due to the presence of these things in the route
    public double CarGasLosscalculator(int intersection, int busstop){

        double result=(CarunitFuelWastageIntersectionCost*intersection)+(CarunitFuelWastageBusStopsCost*busstop);
        return result;

    }



}
