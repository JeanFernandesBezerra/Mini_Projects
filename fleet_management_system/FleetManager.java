package fleet_management_system;

public class FleetManager {
    private Vehicle[] fleet;
    private int count;

    public FleetManager() {
        this.fleet = new Vehicle[1];
        this.count = 0;
    }

  public void copyArray(Vehicle[] originalFleet) {
        if (count == originalFleet.length) {
            //expand array of vehicle
            Vehicle[] copyExpandedFleetCopy = new Vehicle[originalFleet.length + 10];
            for (int arrayElement = 0; arrayElement < originalFleet.length; arrayElement++) {
                copyExpandedFleetCopy[arrayElement] = this.fleet[arrayElement];
            }
            this.fleet = copyExpandedFleetCopy;
        }
    }

    public void addVehicle(Vehicle vehicle){
        copyArray(this.fleet);
        this.fleet[this.count] = vehicle;
        this.count++;
    }

    public void getfleet() {
        if (this.count == 0) {
            System.out.println("NO FLEET AVAILABLE");
        } else {
            for (int i = 0; i < this.count; i++) {
                Vehicle vehicleData = this.fleet[i];

                System.out.printf("======= VEHICLE %d° =======\n", i + 1);

                System.out.println("TYPE: " + vehicleData.getType());
                System.out.println("COLOR: " + vehicleData.getColor());
                System.out.println("MODEL: " + vehicleData.getModel());
                System.out.println("BRAND: " + vehicleData.getBrand());
                System.out.println("YEAR: " + vehicleData.getYear());
                System.out.println("SEATS: " + vehicleData.getSeat());
                System.out.println("WHEELS: " + vehicleData.getWheel());
                System.out.println("GEARS: " + vehicleData.getGearNum());

                double[] dim = vehicleData.getDimensions();
                System.out.println("WIDTH: " + dim[0] + "m");
                System.out.println("LENGHT: " + dim[1] + "m");
                System.out.println("HEIGHT: " + dim[2] + "m");

                System.out.println("DOORS: " + vehicleData.getDoors());

                if (vehicleData instanceof Trucks) {
                    Trucks truck = (Trucks) vehicleData;
                    System.out.println("LOAD CAPACITY: " + truck.getloadCapacityTons() + " Tons");
                }

                System.out.println("VALUE TO PAY: "+ vehicleData.calculateRentValue(vehicleData.getDays()));

                System.out.println("===========================\n");
            }
        }
    }

}
