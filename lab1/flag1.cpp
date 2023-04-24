#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <iostream>
const char* vertexShaderSource = "#version 330 core\n"
"layout (location = 0) in vec3 aPos;\n"
"layout (location = 1) in vec3 aColor;\n"
"out vec3 ourColor;\n"
"void main()\n"
"{\n"
" gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0);\n"
" ourColor = aColor;\n"
"}\0";
const char* fragmentShaderSource = "#version 330 core\n"
"out vec4 FragColor;\n"
"in vec3 ourColor;\n"
"void main()\n"

"{\n"
" FragColor = vec4(ourColor.x, ourColor.y, ourColor.z, 1.0f);\n" "}\0";
float vertices[] = {
-0.55f, 0.4f, -0.5f, 0.0f,0.1190f, 0.5764f,
-0.55f, -0.55f, -0.5f, 0.0f,0.1190f, 0.5764f,
0.63f, -0.55f, -0.5f, 0.0f,0.1190f, 0.5764f,
-0.55f,0.58f, 0.0f, 0.0f,0.1190f, 0.5764f,
-0.55f, -0.03f, 0.0f, 0.0f,0.1190f, 0.5764f,
0.63f, -0.03f, 0.0f, 0.0f,0.1190f, 0.5764f,
// Lower Red Triangle
-0.5f, 0.3f, 0.0f, 0.9627f,0.0784f, 0.2352f,
-0.5f, -0.5f, 0.0f, 0.9627f,0.0784f, 0.2352f,
0.5f, -0.5f, 0.0f, 0.9627f,0.0784f, 0.2352f,
// Upper Red Triangle
-0.5f,0.5f, 0.0f, 0.9627f, 0.0784f, 0.2352f,
0.5f, 0.0f, 0.0f, 0.9627f,0.0784f, 0.2352f,
-0.5f, 0.0f, 0.0f, 0.9627f,0.0784f, 0.2352f,
};
unsigned int indices[] = {
0, 1, 2,
3, 4, 5,
6,7,8,
9, 10, 11
};
int main()
{
// initialize GLFW
if (!glfwInit())
{
std::cerr << "Failed to initialize GLFW" << std::endl;
return -1;
}
// create a window
GLFWwindow* window = glfwCreateWindow(600, 800, "Flag of Nepal", NULL, NULL);
if (!window)
{
std::cerr << "Failed to create GLFW window" << std::endl; glfwTerminate();
return -1;
}
// make the context of the window current
glfwMakeContextCurrent(window);
// initialize glad
if (!gladLoadGL())
{
std::cerr << "Failed to initialize glad" << std::endl;
return -1;
}

// set the viewport size
int width, height;
glfwGetFramebufferSize(window, &width, &height);
glViewport(0, 0, width, height);
// create a Vertex Array Object (VAO) and a Vertex Buffer Object (VBO) unsigned
int VAO, VBO, EBO;
glGenVertexArrays(1, &VAO);
glBindVertexArray(VAO);
glGenBuffers(1, &VBO);
glGenBuffers(1, &EBO);
// bind the VAO
// bind the VBO and copy the vertex data to it
glBindBuffer(GL_ARRAY_BUFFER, VBO);
glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW); //
bind the EBO and copy the index data to it
glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices,
GL_STATIC_DRAW);
// set the vertex attribute pointers
glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)0);
glEnableVertexAttribArray(0);
glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)(3 *
sizeof(float)));
glEnableVertexAttribArray(1);
// Link shaders
unsigned int shaderProgram = glCreateProgram();
// Compile shaders
unsigned int vertexShader = glCreateShader(GL_VERTEX_SHADER);
glShaderSource(vertexShader, 1, &vertexShaderSource, nullptr);
glCompileShader(vertexShader);
unsigned int fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);
glShaderSource(fragmentShader, 1, &fragmentShaderSource, nullptr);
glCompileShader(fragmentShader);
glAttachShader(shaderProgram, vertexShader);
glAttachShader(shaderProgram, fragmentShader);
glLinkProgram(shaderProgram);
glDeleteShader(vertexShader);
glDeleteShader(fragmentShader);
// run the main loop
while (!glfwWindowShouldClose(window))
{
// handle events
glfwPollEvents();
// clear the buffer
// set the clear color
glClearColor(0.5f, 0.5f, 0.5f, 1.0f);
glClear(GL_COLOR_BUFFER_BIT);

glUseProgram(shaderProgram);
// draw the flag
glBindVertexArray(VAO);
glDrawElements(GL_TRIANGLES, sizeof(indices) / sizeof(unsigned int),
GL_UNSIGNED_INT, 0);
// glBindVertexArray(0);
// swap the front and back buffers
glfwSwapBuffers(window);
}
// cleanup
glDeleteShader(vertexShader);
glDeleteShader(fragmentShader);
glDeleteProgram(shaderProgram);
glDeleteVertexArrays(1, &VAO);
glDeleteBuffers(1, &VBO);
glDeleteBuffers(1, &EBO);
// terminate GLFW
glfwTerminate();
return 0;
}