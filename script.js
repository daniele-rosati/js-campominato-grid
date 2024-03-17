//  Generazione delle celle 
//  Iniziamo il conteggio da 1
//  Quando l'utente clicca su una cella, chiamiamo la funzione handleClick() 
//  La classe "clicked" verrà aggiunta alla cella cliccata 
//  Il testo all'interno della cella sarà il numero progressivo 
//  Ad esempio, la prima cella avrà il testo "1", la seconda "2", ecc. 
//  Una cella cliccata avrà anche un event listener che richiama la funzione handleCellClick 
//  Passiamo il numero della cella cliccata come parametro alla funzione 
//  In console verrà emesso un messaggio con il numero della cella cliccata 
//  Si prega di aprire la console del browser per vedere i messaggi 
//  Fai clic su una cella per vedere l'effetto 
//  I numeri andranno da 1 a 100 

  // Funzione per gestire il clic su una cella
  function handleCellClick(cellNumber) {
    console.log("Hai cliccato sulla cella numero:", cellNumber);
  }

  // Funzione per creare la griglia di gioco
  function createGameGrid() {
    const gridContainer = document.querySelector('.grid-container');

    for (let i = 1; i <= 100; i++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-item');
      cell.textContent = i;

      // Aggiungi un event listener per gestire il clic sulla cella
      cell.addEventListener('click', function() {
        // Rimuovi la classe "clicked" da tutte le celle
        document.querySelectorAll('.grid-item').forEach(cell => {
          cell.classList.remove('clicked');
        });
        // Aggiungi la classe "clicked" solo alla cella cliccata
        this.classList.add('clicked');
        // Chiama la funzione per gestire il clic sulla cella
        handleCellClick(i);
      });

      gridContainer.appendChild(cell);
    }
  }

  // Inizializza la griglia di gioco al caricamento della pagina
  createGameGrid();
  