let grille = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 2, 0, 3, 4, 5, 6, 7],
  [0, 3, 4, 5, 0, 6, 1, 8, 2],
  [0, 0, 1, 0, 5, 8, 2, 0, 6],
  [0, 0, 8, 6, 0, 0, 0, 0, 1],
  [0, 2, 0, 0, 0, 7, 0, 5, 0],
  [0, 0, 3, 7, 0, 5, 0, 2, 8],
  [0, 8, 0, 0, 6, 0, 7, 0, 0],
  [2, 7, 0, 0, 8, 3, 6, 1, 5],
];

const verifierRowCol = (grille, num, row, col) => {
  for (let i = 0; i < grille.length; i++) {
    if (grille[row][i] === num || grille[i][col] === num) {
      return false;
    }
  }
  return true;
};
const verifierCarre = (grille, num, row, col) => {
  for (let i = row - (row % 3); i < row - (row % 3) + 3; i++) {
    for (let j = col - (col % 3); j < col - (col % 3) + 3; j++) {
      if (grille[i][j] === num) {
        return false;
      }
    }
  }
  return true;
};

const resoudre = (grille) => {
  //boucler dans les lignes de la grille
  for (let row = 0; row < grille.length; row++) {
    //boucler dans les colonnes de la grille
    for (let col = 0; col < grille.length; col++) {
      //si la case courante est vide (0) on lance la verification
      if (grille[row][col] === 0) {
        //on essaie toutes les valeurs de 1 a 9
        for (let num = 1; num <= grille.length; num++) {
          //on verifie si la valeur n'est pas deja presente sur la ligne, la colonne et le carre
          if (
            verifierRowCol(grille, num, row, col, num) &&
            verifierCarre(grille, num, row, col)
          ) {
            //on ajoute la valeur valide a la case courante
            grille[row][col] = num;
            //on appelle la fonction recursivement avec la nouvelle grille
            if (resoudre(grille)) {
              //si la grille est toujours valide on continue a resoudre par recursivite
              return true;
            }
            //sinon on remet la case a 0 et on essaie la valeur suivante
            else {
              grille[row][col] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
};

resoudre(grille);
console.log('grille', grille);
