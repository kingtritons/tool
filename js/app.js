$(document).ready(function(){
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
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
            answer: ""
        },
        {
            question: "What is a flip flop?",
            optionA: "A circuit that has two stable states and can be used to store state information.",
            optionB: "The internal fan of a computer.",
            optionC: "Another name for a CPU",
            optionD: "Another name for 0 addressing",
            answer: ""
        },
        {
            question: "Which flip flop mimics an exclusive OR in the characteristic table?",
            optionA: "JK.",
            optionB: "D",
            optionC: "T",
            optionD: "None of the above",
            answer: ""
        },
        {
            question: "Which Flip Flop has two inputs(excluding the clock)?",
            optionA: "JK",
            optionB: "D",
            optionC: "T",
            optionD: "D & T",
            answer: ""
        },
        {
            question: "Which counters use a clock signal?",
            optionA: "Asynchronous ",
            optionB: "Synchronous",
            optionC: "Both",
            optionD: "None",
            answer: ""
        },
        {
            question: "A 3 bit synchronous counter would use how many flip flops?",
            optionA: "2",
            optionB: "1",
            optionC: "3",
            optionD: "As much as you like",
            answer: ""
        },
        {
            question: "A bidirectional counter has a sequence: 0, 3, 5, 4, 1, 2, 7, 6. How many flip flips does this counter have?",
            optionA: "4",
            optionB: "3",
            optionC: "7",
            optionD: "None of the above",
            answer: ""
        },
        {
            question: "A T flip flop has A`B + AB` as its input. What other logic gate could be used in replacement of the two AND gates and the OR gate?",
            optionA: "NOR",
            optionB: "XOR",
            optionC: "NOT",
            optionD: "NAND",
            answer: ""
        },
        {
            question: "Which tables are needed to design any synchronous counter? (Assuming we want full marks)",
            optionA: "Excitation Table",
            optionB: "Excitation & Present-State, Next-State Tables",
            optionC: "Characteristic & Present-State, Next-State Tables",
            optionD: "Characteristics, Excitation & Present-State, Next-State Tables",
            answer: ""
        },
        {
            question: "What is the binary representation of the sequence: 3, 1, 0, 2?",
            optionA: "11, 10, 00, 01",
            optionB: "10, 11, 00, 01",
            optionC: "11, 01, 00, 10",
            optionD: "01, 11, 10, 00",
            answer: ""
        },
    ];
    for (let i = 0; i < questions.length; i++)
    {

    }

});

