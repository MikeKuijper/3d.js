class vector {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.projected = 0;

    this.projection = [
      [1, 0, 0],
      [0, 1, 0]
    ];
  }

  project() {
    this.projected = matrixToVector(matrixMultiplyVector(this.projection, this));
    this.projected.z = 0;
  }

  rotate(xAngle, yAngle, zAngle) {
    if (xAngle != 0) this.rotateX(xAngle);
    if (yAngle != 0) this.rotateRelativeY(yAngle);
    if (zAngle != 0) this.rotateRelativeZ(zAngle);
  }

  rotateAround(vector, xAngle, yAngle, zAngle) {
    if (xAngle != 0) this.rotateX(xAngle);
    if (yAngle != 0) this.rotateRelativeY(yAngle);
    if (zAngle != 0) this.rotateRelativeZ(zAngle);
  }

  rotateRelativeX(angle) {
    let rotationX = [
      [1, 0, 0],
      [0, cos(angle), -sin(angle)],
      [0, sin(angle), cos(angle)]
    ];
    let v = matrixToVector(matrixMultiplyVector(rotationX, this.projected));
    this.projected = new vector(v.x, v.y, v.z);
  }

  rotateRelativeY(angle) {
    let rotationY = [
      [cos(angle), 0, sin(angle)],
      [0, 1, 0],
      [sin(angle), 0, cos(angle)],
    ];
    let v = matrixToVector(matrixMultiplyVector(rotationY, this.projected));
    this.projected = new vector(v.x, v.y, v.z);
  }

  rotateRelativeZ(angle) {
    let rotationZ = [
      [cos(angle), -sin(angle), 0],
      [sin(angle), cos(angle), 0],
      [0, 0, 1]
    ];
    let v = matrixToVector(matrixMultiplyVector(rotationZ, this.projected));
    this.projected = new vector(v.x, v.y, v.z);
  }

  rotateX(angle) {
    let rotationX = [
      [1, 0, 0],
      [0, cos(angle), -sin(angle)],
      [0, sin(angle), cos(angle)]
    ];
    let v = matrixToVector(matrixMultiplyVector(rotationX, this));
    this.projected = new vector(v.x, v.y, v.z);
  }

  rotateY(angle) {
    let rotationY = [
      [cos(angle), 0, sin(angle)],
      [0, 1, 0],
      [sin(angle), 0, cos(angle)],
    ];
    let v = matrixToVector(matrixMultiplyVector(rotationY, this));
    this.projected = new vector(v.x, v.y, v.z);
  }

  rotateZ(angle) {
    let rotationZ = [
      [cos(angle), -sin(angle), 0],
      [sin(angle), cos(angle), 0],
      [0, 0, 1]
    ];
    let v = matrixToVector(matrixMultiplyVector(rotationZ, this));
    this.projected = new vector(v.x, v.y, v.z);
  }

  rotateAround(vector, xAngle, yAngle, zAngle) {
    if (xAngle != 0) this.rotateXAround(vector, xAngle);
    if (yAngle != 0) this.rotateRelativeYAround(vector, yAngle);
    if (zAngle != 0) this.rotateRelativeZAround(vector, zAngle);
  }

  rotateRelativeXAround(vector, angle) {
    let rotationX = [
      [1, 0, 0],
      [0, cos(angle), -sin(angle)],
      [0, sin(angle), cos(angle)]
    ];
    let v = matrixToVector(matrixMultiplyVector(rotationX, new vector(this.projected.x - vector.x, this.projected.y - vector.y, this.projected.y - vector.z)));
    this.projected = new vector(v.x, v.y, v.z);
  }

  rotateRelativeYAround(vector, angle) {
    let rotationY = [
      [cos(angle), 0, sin(angle)],
      [0, 1, 0],
      [sin(angle), 0, cos(angle)],
    ];
    let v = matrixToVector(matrixMultiplyVector(rotationY, new vector(this.projected.x - vector.x, this.projected.y - vector.y, this.projected.y - vector.z)));
    this.projected = new vector(v.x, v.y, v.z);
  }

  rotateRelativeZAround(vector, angle) {
    let rotationZ = [
      [cos(angle), -sin(angle), 0],
      [sin(angle), cos(angle), 0],
      [0, 0, 1]
    ];
    let v = matrixToVector(matrixMultiplyVector(rotationZ, new vector(this.projected.x - vector.x, this.projected.y - vector.y, this.projected.y - vector.z)));
    this.projected = new vector(v.x, v.y, v.z);
  }

  rotateXAround(vector, angle) {
    let rotationX = [
      [1, 0, 0],
      [0, cos(angle), -sin(angle)],
      [0, sin(angle), cos(angle)]
    ];
    let v = matrixToVector(matrixMultiplyVector(rotationX, new vector(this.x - vector.x, this.y - vector.y, this.y - vector.z)));
    this.projected = new vector(v.x, v.y, v.z);
  }

  rotateYAround(vector, angle) {
    let rotationY = [
      [cos(angle), 0, sin(angle)],
      [0, 1, 0],
      [sin(angle), 0, cos(angle)],
    ];
    let v = matrixToVector(matrixMultiplyVector(rotationY, new vector(this.x - vector.x, this.y - vector.y, this.y - vector.z)));
    this.projected = new vector(v.x, v.y, v.z);
  }

  rotateZAround(vector, angle) {
    let rotationZ = [
      [cos(angle), -sin(angle), 0],
      [sin(angle), cos(angle), 0],
      [0, 0, 1]
    ];
    let v = matrixToVector(matrixMultiplyVector(rotationZ, new vector(this.x - vector.x, this.y - vector.y, this.y - vector.z)));
    this.projected = new vector(v.x, v.y, v.z);
  }
}

function vectorToMatrix(v) {
  let m = [
    [v.x],
    [v.y],
    [v.z]
  ];
  return m;
}

function matrixToVector(m) {
  let v = new vector();
  v.x = m[0][0];
  v.y = m[1][0];
  if (m.length > 2) {
    v.z = m[2][0];
  }
  return v;
}

function matrixMultiplyMatrix(a, b) {
  let columnsA = a[0].length;
  let rowsA = a.length;
  let columnsB = b[0].length;
  let rowsB = b.length;

  if (columnsA != rowsB) {
    throw("Number of columns of A must be equal to the number of rows of B");
  }

  let result = createArray(rowsA, columnsB);

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < columnsB; j++) {
      let sum = 0;
      for (let k = 0; k < columnsA; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
}

function matrixMultiplyVector(a, b) {
  let m = vectorToMatrix(b);
  return matrixMultiplyMatrix(a, m);
}

function point3d(x, y, z) {
  let v = new vector(x, y, z);
  v.project();
  point(v.projected.x / zoom, v.projected.y / zoom);
}

function ellipse3d(x, y, z, xRotation, yRotation, zRotation, d1, d2) {
  let v = new vector(x / zoom, y / zoom, z / zoom);
  v.rotate(xRotation, yRotation, zRotation);
  ellipse(v.projected.x, v.projected.y, d1 / zoom, d2 / zoom);
}

function text3d(message, x, y, z) {
  let v = new vector(x / zoom, y / zoom, z / zoom);
  v.project();
  text(message, v.projected.x, v.projected.y);
}

function createArray(length) {
  var arr = new Array(length || 0),
    i = length;

  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while (i--) arr[length - 1 - i] = createArray.apply(this, args);
  }

  return arr;
}

function pitchBetween(a, b) {
  let x = a.x - b.x;
  let y = a.y - b.y;
  let z = a.z - b.z;
  let r = sqrt(x * x + y * y + z * z);
  let result = atan(z / x);
  if (x > 0) return result;
  else if (x < 0) return result + 180;
  else return 0;
}

function azimuthBetween(a, b) {
  let x = a.x - b.x;
  let y = a.y - b.y;
  let z = a.z - b.z;
  let r = sqrt(x * x + y * y + z * z);
  let result = acos(y / r);
  if (r = !0) return result;
  else return 0;
}
