import DrawObject from "./draw.js";

var Red = `void main() {gl_FragColor = vec4(1, 0, 0, 1);}`;
var Green = `void main() {gl_FragColor = vec4(0, 1, 0, 1);}`;
var Blue = `void main() {gl_FragColor = vec4(0, 0, 1, 1);}`;
var Yellow = `void main() {gl_FragColor = vec4(1, 1, 0, 1);}`;
var White = `void main() {gl_FragColor = vec4(1, 1, 1, 1);}`;
var Gray = `void main() {gl_FragColor = vec4(0.5, 0.5, 0.5, 1);}`;

export default function DrawCube(gl,FrontFace, BackFace,LeftFace,RightFace,TopFace,BottomFace) {
  DrawObject(gl,gl.TRIANGLES, 3, Red, BackFace, 0, BackFace.length);
  DrawObject(gl,gl.TRIANGLES, 3, White, LeftFace, 0, BackFace.length);
  DrawObject(gl,gl.TRIANGLES, 3, Gray, BottomFace, 0, BackFace.length);
  DrawObject(gl,gl.TRIANGLES, 3, Yellow, FrontFace, 0, FrontFace.length);
  DrawObject(gl,gl.TRIANGLES, 3, Green, RightFace, 0, RightFace.length);
  DrawObject(gl,gl.TRIANGLES, 3, Blue, TopFace, 0, TopFace.length);
}