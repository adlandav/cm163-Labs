uniform sampler2D texture1;
varying vec2 vUv;

vec2 coordValues;
float u_val;
float v_val;

float absIt(float a) {
	return (a >= 0.000)? a : -a;
}

// float tileItUp(float n, float val, float tileNum, float count) {
// 	float checker;
// 	count += 2.0;


// 	if (count >= tileNum) {
// 		return val;//return no matter what
// 	}
// 	checker = 1 / count;
// 	if(checker >= val) {

// 	}
// }

void main() {
	// sample from the texture based on the uv coordinates
	coordValues.x = ((vUv.x > 0.5)? absIt(vUv.x - 0.5) : vUv.x) * 2.0;
	coordValues.y = ((vUv.y > 0.5)? absIt(vUv.y - 0.5) : vUv.y) * 2.0;
	// coordValues.x = ((vUv.x > 0.5)? vUv.x * 0.5 : vUv.x) * 2.0;
	// coordValues.y = ((vUv.y > 0.5)? vUv.y * 0.5 : vUv.y) * 2.0;

	gl_FragColor = texture2D(texture1, coordValues);
}
