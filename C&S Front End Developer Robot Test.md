#Cats & Shepherd Toy Robot Simulator : Back-end Test

##Rules of engagement
Try use vanilla JavaScript as much as possible, but feel free to use any JavaScript framework/engine you feel is appropriate, but please justify why as part of your notes.

Write the interface so that there is at least a board with a robot and controls.

The logic part of the test should only take about a day to complete, so use the rest of the time too embellish the interface it as much as possible, really show us what you can do. We are a games team after all!

The deliverables for this need to able in the form of a Github repository, and ideally with a hosted version that we can test on. We will try install it locally so please give necessary set-up instructions.

> We will be giving it to a noob to install so make no assumptions!

##Description
* The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
* There are no other obstructions on the table surface.
* The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid
movement commands must still be allowed.
* Create an application that can read in commands, through typing input and/or UI controls, of the following form –
    * PLACE X,Y,F
        * This will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
        * The origin (0,0) can be considered to be the SOUTH WEST most corner.
        * The first valid command to the robot is a PLACE command, after that, sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.any
    * MOVE
        * This will move the toy robot one unit forward in the direction it is currently facing.
    * LEFT
        * this will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
    * RIGHT
        * this will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
    * REPORT
        * this will announce the X,Y and F of the robot.
* A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.
* Input can be from a file, or from standard input, as the developer chooses.

___
> NB: Provide test data to exercise the application.
___
##Constraints
* The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot.
* Any move that would cause the robot to fall must be ignored.
* Examples Input and Output:

        PLACE 0,0,NORTH
        MOVE
        REPORT >>> Output: 0,1,NORTH
        PLACE 0,0,NORTH
        LEFT
        REPORT >>> Output: 0,0,WEST
        PLACE 1,2,EAST
        MOVE
        MOVE
        LEFT
        MOVE
        REPORT >>> Output: 3,3,NORTH