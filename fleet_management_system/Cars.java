package fleet_management_system;

public class Cars extends Vehicle {
    protected static final int minWheelsCar = 4;
    protected static final int minDoorsCar = 2;
    public Cars(String type,String color, String model, String brand, int year,int doors,int minDoors, int seat, int wheel, int minWheel, int gearNum, double[] dimensions, int days) {
        super(type,color, model, brand, year,doors,minDoors, seat, wheel, minWheel, gearNum, dimensions, days);
    }

    @Override
    public double calculateRentValue(int days) {
        if(days >= 1 && days <= 7) {
            return days*15;
        }
        else if(days >= 8 && days <= 12) {
            return days*12;
        }
        else if(days >= 13) {
            return days*10;
        }
        else{
            return -1; //Days must be more than 0
        }
    }

    @Override
    public int getMinWheels(){
        return minWheelsCar;
    }

    @Override
    public int getMinDoors(){
        return minDoorsCar;
    }



}
