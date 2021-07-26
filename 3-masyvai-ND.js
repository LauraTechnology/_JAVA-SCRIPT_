var

var
for


for (var i = 0; i < m.length; i++) {
  for (var j = 0; j < m.length; j++) {
    mk[i][j] = m[(i + j) % m.length];
  }
}


