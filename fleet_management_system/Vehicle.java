package fleet_management_system;

//ABSTRACT CLASS
public abstract class Vehicle {
    //ATRIBUTES
    private String type;
    private String color;
    private final String model;
    private final String brand;
    private int year;
    private int doors;
    private int seat;
    private int wheel;
    private int gearNum;
    private double baseRentalPrice;
    private final double[] dimensions;
    private int days;

    public Vehicle(String type,String color, String model, String brand, int year,int doors,int minDoors, int seat, int wheel, int minWheel, int gearNum, double[] dimensions, int days) {
        this.type = type;
        this.color = color;
        this.model = model;
        this.brand = brand;
        setYear(year);
        setDoors(doors, minDoors);
        setSeat(seat);
        setWheel(wheel, minWheel);
        setGearNum(gearNum);
        this.dimensions = new double[dimensions.length];
        setDimensions(dimensions);
        setDays(days);
    }

    //IT METHOD MUST RETURN THE VALUE FROM RENT VEHICLE
    public abstract double calculateRentValue(int days);

    //IT METHOD SAYS THE MINIMO WHEELS TO VEHICLE
    protected abstract int getMinWheels();

    //IT METHOD SAYS THE MINIMO DOORS TO VEHICLE
    protected abstract int getMinDoors();

    public int getDays() {
        return days;
    }
    public void setDays(int days) {
        if (days <= 0) {
            System.out.println("Days must be greater than zero");
        }
        else{
            this.days = days;
        }
    }

    public double [] getDimensions() {
        return dimensions;
    }
    public void setDimensions(double[] dimensions) {
        if (dimensions.length == 3) {//IT CHECK IF DIMENSIONS HAVE 3 ELEMENTS
            for (int element = 0; element < dimensions.length; element++) {//IT CHECK IF EACH ELEMENT FROM DIMENSIONS IS MORE SIZE THAN ZERO OR EQUAL ZERO
                if (dimensions[element] <= 0) {
                    switch (element) {
                        case 0:
                            System.out.println("Width invalid!".toUpperCase());
                            break;

                        case 1:
                            System.out.println("Lenght invalid!".toUpperCase());
                            break;

                        case 2:
                            System.out.println("Height invalid!".toUpperCase());
                            break;
                    }
                } else {
                    this.dimensions[element] = dimensions[element];
                }
            }
        }
        else{
            System.out.println("INVALID DIMENSIONS ARRAY! MUST CONTAIN EXACTLY 3 ELEMENTS.");
        }
    }

    public String getType() {
        return type;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getModel() {
        return model;
    }

    public String getBrand() {
        return brand;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        if(year < 1990){
            System.out.println("Invalid year!".toUpperCase());
        }
        this.year = year;
    }

    public int getSeat() {
        return seat;
    }

    public void setSeat(int seat) {
        if (seat <= 0) {
            System.out.println("Seat invalid".toUpperCase());
        }
        else{
            this.seat = seat;
        }
    }

    public int getWheel() {
        return wheel;
    }

    public void setWheel(int wheel, int minWheel) {
        if (wheel < minWheel) {
            System.out.println("Wheel invalid".toUpperCase());
        }
        else{
            this.wheel = wheel;
        }
    }

    public int getGearNum() {
        return gearNum;
    }

    public void setGearNum(int gearNum) {
        if (gearNum <= 2) {
            System.out.println("Gear invalid".toUpperCase());
        }
        this.gearNum = gearNum;
    }

    public double getBaseRetalPrice() {
        return baseRentalPrice;
    }

    public void setBaseRetalPrice(double baseRetalPrice) {
        if (baseRetalPrice < 0) {
            System.out.println("baseRetalPrice is negative".toUpperCase());
        }
        else{
            this.baseRentalPrice = baseRetalPrice;
        }
    }

    public int getDoors() {
        return doors;
    }

    public void setDoors(int doors, int minDoors) {
        if (doors < minDoors) {
            System.out.println("Invalid doors! Minimum required: " + minDoors);
        } else {
            this.doors = doors;
        }
    }
}
