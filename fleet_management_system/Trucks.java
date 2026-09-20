package fleet_management_system;

public class Trucks extends Vehicle {
    private double loadCapacityTons;
    protected static final int minWheelsTruck = 6;
    protected static final int minDoorsTruck = 2;

    public Trucks(String type,String color, String model, String brand, int year,int doors,int minDoors, int seat, int wheel, int minWheel, int gearNum, double[] dimensions,double loadCapacityTons,int days) {
       super(type,color, model, brand, year,doors,minDoors, seat, wheel, minWheel, gearNum, dimensions, days);
       this.loadCapacityTons = loadCapacityTons;
   }

    @Override
    public double calculateRentValue(int days) {
       double asphaltWear = 50;
        if(days >= 1 && days <= 7) {
            return ((days*40) + (getloadCapacityTons()*asphaltWear));
        }
        else if(days >= 8 && days <= 12) {
            return ((days*35) + (getloadCapacityTons()*asphaltWear));
        }
        else if(days >= 13) {
            return ((days*30) + (getloadCapacityTons()*asphaltWear));
        }
        else{
            return -1; //Days must be more than 2
        }
    }

    @Override
    public int getMinWheels(){
        return minWheelsTruck;
    }

    public double getloadCapacityTons() {
       return loadCapacityTons;
    }

    public void setLoadCapacityTons(double LoadCapacityTons) {
       this.loadCapacityTons = LoadCapacityTons;
    }

    @Override
    public int getMinDoors(){
        return minDoorsTruck;
    }
}
