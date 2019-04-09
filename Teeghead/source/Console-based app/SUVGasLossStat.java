public class SUVGasLossStat {

    //these data are for the SUVs(in Canadian dollars)
    private double SUVunitFuelWastageIntersectionCost= 0.024 ;
    private double SUVunitFuelWastageBusStopsCost= 0.006 ;

    //this is just an empty constructor
    public SUVGasLossStat(){}


    //this method take the number of intersection. zebracross and busstops as parameters
    //then calculates the total monetary loss due to the presence of these things in the route
    public double SUVGasLosscalculator(int intersection, int busstop){

        double result=(SUVunitFuelWastageIntersectionCost*intersection)+(SUVunitFuelWastageBusStopsCost*busstop);
        return result;

    }

}
