﻿"use strict;"

$('document').ready(function () {
    var settingsModal = $("#settingsModal");
    var settingsOk = $("#settingsModalOk");

    // Create card #n.
    var createCard = function (n) {
        var card = $("<div></div>")
            .attr('id', `card-${n}`)
            .addClass("game-card bg-dark text-light")
            .append($("<h3></h3>")
                .addClass("text-center")
                .text(Math.floor(n / 2))
        );

        return card;
    }

    // Populates the card grid with a card deck going up to the specified number.
    // A deck consists of n pairs of cards numbering 1-n.
    var createCardDeck = function (n) {
        var column = $("#card-grid-col");

        var body = $("#card-grid-body");
        body.empty();

        var numCards = 2 * n;

        var i = 2;
        while (i < numCards) {
            var row = $("<tr></tr>");

            var node = $("<td></td>")
                .append(createCard(Math.floor(i / 2))
                    // No chained calls yet
            );

            while (row.width() + node.width() < column.width() && i < numCards) {
                row.append(node);

                i++;

                node = $("<td></td>")
                    .append(createCard(Math.floor(i / 2))
                        // No chained calls yet
                    );
            }

            body.append(row);
        }

        for (var r = 0; r < rows; r++) {
            var row = $("<tr></tr>");

            for (var c = 0; c < cols && i <= numCards; c++) {
                row.append($("<td></td>")
                    .append(createCard(Math.floor(i / 2))
                        // No chained calls yet
                    )
                );

                i++;
            }

            body.append(row);
        }
    }

    //createCardDeck(10);

    //settingsModal.modal('show');
});