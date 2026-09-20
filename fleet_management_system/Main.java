package fleet_management_system;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        FleetManager fleetManager = new FleetManager();
        int choice;

        String type;
        String color;
        String model;
        String brand;
        int year;
        int seat;
        int wheel;
        int gear;
        double width;
        double lenght;
        double height;
        int doors;
        double[] dimensions;
        double capacity;
        int totalDays;



        while(true){
            System.out.println("=".repeat(7)+" MENU VEHICLE "+"=".repeat(7));
            System.out.println("1 - Sign up car\n2 - Sign up truck\n3 - list vehicle and rental simulation\n4 - Quit");
            choice = input.nextInt();
            input.nextLine();

            if (choice == 4) {
                System.out.println("GOOD BYE!");
                break;
            }

            switch(choice){
                //=======CASE 1=========================================
                case 1:
                    type = "CAR";
                    System.out.print("COLOR: ");
                    color =  input.nextLine();

                    System.out.print("MODEL: ");
                    model = input.nextLine();

                    System.out.print("BRAND: ");
                    brand = input.nextLine();
                    //=--================================
                    do {
                        System.out.print("YEAR: ");
                        year = input.nextInt();
                        input.nextLine();

                        if (year < 1990) {
                            System.out.println("INVALID YEAR! YEAR MUST BE 1990 OR NEWER");
                        }
                    } while(year < 1990);
                    //=--================================
                    do{
                        System.out.print("SEAT: ");
                        seat = input.nextInt();
                        input.nextLine();
                    }while(seat <= 0);
                    //=--================================
                    do{
                        System.out.print("WHEELS: ");
                        wheel = input.nextInt();
                        input.nextLine();

                        if (wheel < Cars.minWheelsCar){
                            System.out.println("INVALID WHEEL! WHEEL MUST BE MIN 4.");
                        }
                    }while(wheel < Cars.minWheelsCar);
                    //=--=================================

                    do{
                        System.out.print("GEARS: ");
                        gear = input.nextInt();
                        input.nextLine();

                        if(gear<2){
                            System.out.println("INVALID GEAR! GEAR MUST BE AT LEAST 2.");
                        }
                    }while(gear<2);
                    //=--=================================

                    do {
                        System.out.print("WIDTH (m): ");
                        width = input.nextDouble();
                        input.nextLine();

                        if (width <= 0) {
                            System.out.println("INVALID WIDTH! WIDTH MUST BE GREATER THAN 0.");
                        }
                    } while (width <= 0);
                    //=--=================================
                    do {
                        System.out.print("LENGHT (m): ");
                        lenght = input.nextDouble();
                        input.nextLine();

                        if (lenght <= 0) {
                            System.out.println("INVALID LENGHT! LENGHT MUST BE GREATER THAN 0.");
                        }
                    } while (lenght <= 0);
                    //=--=================================
                    do {
                        System.out.print("HEIGHT (m): ");
                        height = input.nextDouble();
                        input.nextLine();

                        if (height <= 0) {
                            System.out.println("INVALID HEIGHT! HEIGHT MUST BE GREATER THAN 0.");
                        }
                    } while (height <= 0);

                    //=--=================================
                    do{
                        System.out.print("DOORS: ");
                        doors = input.nextInt();
                        input.nextLine();

                        if (doors < Cars.minDoorsCar){
                            System.out.println("INVALID DOOR! DOOR MUST BE MIN 2.");
                        }
                    }while (doors < Cars.minDoorsCar);
                    //=--=================================
                    do{
                        System.out.print("TOTAL DAYS: ");
                        totalDays = input.nextInt();
                        input.nextLine();

                        if (totalDays < 0){
                            System.out.println("INVALID DAYS! DAYS MUST BE MIN 1.");
                        }
                    }while (totalDays < 0);
                    //=--=================================


                    dimensions = new double[]{width, lenght, height};
                    Vehicle car = new Cars(type,color,model,brand,year,doors,Cars.minDoorsCar,seat,wheel,Cars.minWheelsCar,gear,dimensions,totalDays);
                    fleetManager.addVehicle(car);
                    break;

                    //=--=================================




                //=======CASE 2=========================================
                case 2:
                    type = "TRUCK";
                    System.out.print("COLOR: ");
                    color =  input.nextLine();

                    System.out.print("MODEL: ");
                    model = input.nextLine();

                    System.out.print("BRAND: ");
                    brand = input.nextLine();
                    //=--================================
                    do {
                        System.out.print("YEAR: ");
                        year = input.nextInt();
                        input.nextLine();

                        if (year < 1990) {
                            System.out.println("INVALID YEAR! YEAR MUST BE 1990 OR NEWER");
                        }
                    } while(year < 1990);
                    //=--================================
                    do{
                        System.out.print("SEAT: ");
                        seat = input.nextInt();
                        input.nextLine();
                    }while(seat <= 0);
                    //=--================================
                    do{
                        System.out.print("WHEELS: ");
                        wheel = input.nextInt();
                        input.nextLine();

                        if (wheel < Trucks.minWheelsTruck){
                            System.out.println("INVALID WHEEL! WHEEL MUST BE MIN 6.");
                        }
                    }while(wheel < Trucks.minWheelsTruck);
                    //=--=================================

                    do{
                        System.out.print("GEARS: ");
                        gear = input.nextInt();
                        input.nextLine();

                        if(gear<2){
                            System.out.println("INVALID GEAR! GEAR MUST BE AT LEAST 2.");
                        }
                    }while(gear<2);
                    //=--=================================

                    do {
                        System.out.print("WIDTH (m): ");
                        width = input.nextDouble();
                        input.nextLine();

                        if (width <= 0) {
                            System.out.println("INVALID WIDTH! WIDTH MUST BE GREATER THAN 0.");
                        }
                    } while (width <= 0);
                    //=--=================================
                    do {
                        System.out.print("LENGHT (m): ");
                        lenght = input.nextDouble();
                        input.nextLine();

                        if (lenght <= 0) {
                            System.out.println("INVALID LENGHT! LENGHT MUST BE GREATER THAN 0.");
                        }
                    } while (lenght <= 0);
                    //=--=================================
                    do {
                        System.out.print("HEIGHT (m): ");
                        height = input.nextDouble();
                        input.nextLine();

                        if (height <= 0) {
                            System.out.println("INVALID HEIGHT! HEIGHT MUST BE GREATER THAN 0.");
                        }
                    } while (height <= 0);

                    //=--=================================
                    do{
                        System.out.print("DOORS: ");
                        doors = input.nextInt();
                        input.nextLine();

                        if (doors < Trucks.minDoorsTruck){
                            System.out.println("INVALID DOOR! DOOR MUST BE MIN 2.");
                        }
                    }while (doors < Trucks.minDoorsTruck);
                    //=--=================================
                    do{
                        System.out.println("CAPACITY (ton): ");
                        capacity = input.nextDouble();
                        input.nextLine();

                        if (capacity <= 0) {
                            System.out.println("INVALID CAPACITY! CAPACITY MUST BE GREATER 0.");
                        }
                    }while(capacity <= 0);

                    //=--=================================
                    do{
                        System.out.print("TOTAL DAYS: ");
                        totalDays = input.nextInt();
                        input.nextLine();

                        if (totalDays < 0){
                            System.out.println("INVALID DAYS! DAYS MUST BE MIN 1.");
                        }
                    }while (totalDays < 0);
                    //=--=================================

                    dimensions = new double[]{width, lenght, height};
                    Vehicle truck = new Trucks(type,color,model,brand,year,doors,Trucks.minDoorsTruck,seat,wheel,Trucks.minWheelsTruck,gear,dimensions,capacity,totalDays);
                    fleetManager.addVehicle(truck);
                    break;


                //=======CASE 3=========================================
                case 3:
                    fleetManager.getfleet();
                    break;

                //=======CASE DEFAULT=========================================

                default:
                    System.out.println("INVALID CHOICE!");

            }//SWTICH
        }
    }
}
