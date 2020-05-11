# cm163-Labs
 Labs for the game graphics class

# Lab6

![lab6](images/lab6.1.PNG)

### Light Definitions

- Point Light: Behaves like a lightbulb. It illuminates objects close to it on the scene.
- Spot Light: Behaves like a flashlight. Lights objects in a cone.
- Directional Light: Behaves like the sun. Affects all objects on the scene based on direction.
- Area Light: Only works when baking a light map. It shines in all directions to one side of a plane.

### Materials

![lab6](images/lab6.2.png)

- I made a material that somewhat resembles the lid of a grany metal box. It was made By tinkering with the metalic values of Unity's standard shader, and also adding some noise.
- The two texture objects are most noticeable on the floor and the walls of the scene. One of them is made from planks of wood, and the other is a leather texture.
- The sky box is a gradient skybox with a cartoony style.

# Lab5
[Video of the microgame](https://drive.google.com/file/d/12b4t09sYdtp9lHlDzF32ntG9jKXG_7He/view?usp=sharing)

- Swapped the skybox for a space skybox
- Modified a tarck to include a hoop jump and make appear like its floating
- Changed the speed of the kart

![lab5](images/track.PNG)

# Lab4
[Video of the cubes](https://drive.google.com/file/d/1LoJKRUBF0j84DZX0MrHIM1S408vYO-Ox/view?usp=sharing)

### 24
- a) x = (u * 7)
- b) y = (v * 7)
- c) black

### cubes

- The 1st cube is made with a texture and a normal for the texture using three.js library.
- The 2nd cube is made with a texture only using three.js library.
- The 3rd cube is made with a different texture and a normal for the texture using three.js library.
- The 4th cube is using our written vertex and fragment shader. Where the fragment shader uses a sampler to put a texture on the cube
- The 5th cube is using a modified version of the written fragShader. It implements a function which maps a UV point to a value in the range which depends on the number of tiles we want to have. For example, if we want to devide the cube in 4, that gives me a range of 0.25 to which I map a UV coordinate to fit in. Finally, I scale the vector passed to fragColor, to adjust the image into the tile size. Normally I would have preffered to use recursion, but glsl won't allow that. 

![lab4](images/lab4.png)

# Lab3
[Video of the cubes](https://drive.google.com/file/d/1XdfJv379qlZG7weaGTvk6wwvkdX4SZ6M/view?usp=sharing)

- The left cube is made using a meshPhong material provided by THREE.JS
- The second from the left is a combination of the previous material and a height map
- The next cube is an mixing between 2 colors (orange and yeallow)
- The last cube gives a color to each vertex of the cube based on their position and interpolates in between them

![lab3](images/lab3.PNG)

# Lab2
[Video for part1](https://drive.google.com/file/d/1pWu6y_ckZrOspoGqalek8Jl1Z0oqBWdO/view?usp=sharing)

![part2](images/lab2Part2.PNG)





