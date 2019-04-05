$(document).ready(function () {
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.slider').slider();
    // Code to attempt to prevent downloads
    // $('#videoElementID').bind('contextmenu',function() { return false; });

    let questions =
        [
            {
                question: "What is a sequential circuit?",
                optionA: "A type of computer.",
                optionB: "A circuit whose output depends on the order or timing of the inputs.",
                optionC: "A way of simplifying Boolean Algebra.",
                optionD: "Another name for a combinational circuit.",
                answer: 'B'
            },
            {
                question: "What is a flip flop?",
                optionA: "A circuit that has two stable states and can be used to store state information.",
                optionB: "The internal fan of a computer.",
                optionC: "Another name for a CPU",
                optionD: "Another name for 0 addressing",
                answer: 'A'
            },
            {
                question: "Which flip flop mimics an exclusive OR in the characteristic table?",
                optionA: "JK.",
                optionB: "D",
                optionC: "T",
                optionD: "None of the above",
                answer: 'C'
            },
            {
                question: "Which Flip Flop has two inputs(excluding the clock)?",
                optionA: "JK",
                optionB: "D",
                optionC: "T",
                optionD: "D & T",
                answer: 'A'
            },
            {
                question: "Which counters use a clock signal?",
                optionA: "Asynchronous ",
                optionB: "Synchronous",
                optionC: "Both",
                optionD: "None",
                answer: 'B'
            },
            {
                question: "A 3 bit synchronous counter would use how many flip flops?",
                optionA: "2",
                optionB: "1",
                optionC: "3",
                optionD: "As much as you like",
                answer: 'C'
            },
            {
                question: "A bidirectional counter has a sequence: 0, 3, 5, 4, 1, 2, 7, 6. How many flip flips does this counter have?",
                optionA: "4",
                optionB: "3",
                optionC: "7",
                optionD: "None of the above",
                answer: 'B'
            },
            {
                question: "A T flip flop has A`B + AB` as its input. What other logic gate could be used in replacement of the two AND gates and the OR gate?",
                optionA: "NOR",
                optionB: "XOR",
                optionC: "NOT",
                optionD: "NAND",
                answer: 'B'
            },
            {
                question: "Which tables are needed to design any synchronous counter? (Assuming we want full marks)",
                optionA: "Excitation Table",
                optionB: "Excitation & Present-State, Next-State Tables",
                optionC: "Characteristic & Present-State, Next-State Tables",
                optionD: "Characteristics, Excitation & Present-State, Next-State Tables",
                answer: 'D'
            },
            {
                question: "What is the binary representation of the sequence: 3, 1, 0, 2?",
                optionA: "11, 10, 00, 01",
                optionB: "10, 11, 00, 01",
                optionC: "11, 01, 00, 10",
                optionD: "01, 11, 10, 00",
                answer: 'C'
            },
            {
                question: "What is a counter?",
                optionA: "A program used to test computer performance.",
                optionB: "A device used to store the number of occurrences of a particular event.",
                optionC: "A device used to perform calculations.",
                optionD: "A circuit that changes code to signals",
                answer: 'B'
            },
            {
                question: "What is the difference between a synchronous and asynchronous counter?",
                optionA: "Inputs",
                optionB: "Clock Speed",
                optionC: "Clock Signals",
                optionD: "A and C",
                answer: 'D'
            },
            {
                question: "What are synchronous counters made of?",
                optionA: "Flip Flops and logic gates.",
                optionB: "Flip Flops only",
                optionC: "Multiplexers and Decoders",
                optionD: "None of the above",
                answer: 'A'
            },
            {
                question: "What is a logic gate?",
                optionA: "A type of memory",
                optionB: "A part of the ALU",
                optionC: "A device which interprets machine language",
                optionD: "A switch which implements boolean logic",
                answer: 'D'
            },
            {
                question: "A Flip Flop is also known as a:",
                optionA: "Bi-stable circuit",
                optionB: "Latch",
                optionC: "Parallel circuit",
                optionD: "Tri-stable circuit",
                answer: 'A'
            },
            {
                question: "Which is not a type of flip flop?",
                optionA: "JK",
                optionB: "D",
                optionC: "T",
                optionD: "Z",
                answer: 'D'
            },
            {
                question: "How many binary digits would be required when representing a sequence which has the largest value of 7?",
                optionA: "7",
                optionB: "128",
                optionC: "14",
                optionD: "14",
                answer: 'D'
            },
            {
                question: "What value does a clock have at the rising edge?",
                optionA: "2",
                optionB: "1",
                optionC: "0",
                optionD: "4",
                answer: 'B'
            },

        ];
    // let randNumTracker = [];
    // for (let i = 0; i < 10; i++)
    // {
    //     let randNum = Math.floor(Math.random() * questions.length);
    //     randNumTracker.push(randNum);
    //     for (let j = 0; j < randNumTracker.length; j++)
    //     {
    //         if (randNumTracker[j] === randNum)
    //         {
    //             randNum = Math.floor(Math.random() * questions.length);
    //         }
    //     }
    //     $(".list").append(`<p>` + questions[randNum].question + `</p>` + "\n" + `<label> <input name="q1" type="radio" class="with-gap"/>` + `<span>` + `</span>` + `</label>`);
    //
    //     console.log(randNum);
    // }

});

