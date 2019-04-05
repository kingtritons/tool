$(document).ready(function () {
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.slider').slider();
    $('.modal').modal();
    $(".preloader-wrapper").hide();
    let count = 0;

    // Code to attempt to prevent downloads
    // $('#videoElementID').bind('contextmenu',function() { return false; });

    // let questions =
    //     [
    //         {
    //             question: "What is a sequential circuit?",
    //             A: "A type of computer.",
    //             B: "A circuit whose output depends on the order or timing of the inputs.",
    //             C: "A way of simplifying Boolean Algebra.",
    //             D: "Another name for a combinational circuit.",
    //             answer: 'B'
    //         },
    //         {
    //             question: "What is a flip flop?",
    //             A: "A circuit that has two stable states and can be used to store state information.",
    //             B: "The internal fan of a computer.",
    //             C: "Another name for a CPU",
    //             D: "Another name for 0 addressing",
    //             answer: 'A'
    //         },
    //         {
    //             question: "Which flip flop mimics an exclusive OR in the characteristic table?",
    //             A: "JK.",
    //             B: "D",
    //             C: "T",
    //             D: "None of the above",
    //             answer: 'C'
    //         },
    //         {
    //             question: "Which Flip Flop has two inputs(excluding the clock)?",
    //             A: "JK",
    //             B: "D",
    //             C: "T",
    //             D: "D & T",
    //             answer: 'A'
    //         },
    //         {
    //             question: "Which counters use a clock signal?",
    //             A: "Asynchronous ",
    //             B: "Synchronous",
    //             C: "Both",
    //             D: "None",
    //             answer: 'B'
    //         },
    //         {
    //             question: "A 3 bit synchronous counter would use how many flip flops?",
    //             A: "2",
    //             B: "1",
    //             C: "3",
    //             D: "As much as you like",
    //             answer: 'C'
    //         },
    //         {
    //             question: "A bidirectional counter has a sequence: 0, 3, 5, 4, 1, 2, 7, 6. How many flip flips does this counter have?",
    //             A: "4",
    //             B: "3",
    //             C: "7",
    //             D: "None of the above",
    //             answer: 'B'
    //         },
    //         {
    //             question: "A T flip flop has A`B + AB` as its input. What other logic gate could be used in replacement of the two AND gates and the OR gate?",
    //             A: "NOR",
    //             B: "XOR",
    //             C: "NOT",
    //             D: "NAND",
    //             answer: 'B'
    //         },
    //         {
    //             question: "Which tables are needed to design any synchronous counter? (Assuming we want full marks)",
    //             A: "Excitation Table",
    //             B: "Excitation & Present-State, Next-State Tables",
    //             C: "Characteristic & Present-State, Next-State Tables",
    //             D: "Characteristics, Excitation & Present-State, Next-State Tables",
    //             answer: 'D'
    //         },
    //         {
    //             question: "What is the binary representation of the sequence: 3, 1, 0, 2?",
    //             A: "11, 10, 00, 01",
    //             B: "10, 11, 00, 01",
    //             C: "11, 01, 00, 10",
    //             D: "01, 11, 10, 00",
    //             answer: 'C'
    //         },
    //         {
    //             question: "What is a counter?",
    //             A: "A program used to test computer performance.",
    //             B: "A device used to store the number of occurrences of a particular event.",
    //             C: "A device used to perform calculations.",
    //             D: "A circuit that changes code to signals",
    //             answer: 'B'
    //         },
    //         {
    //             question: "What is the difference between a synchronous and asynchronous counter?",
    //             A: "Inputs",
    //             B: "Clock Speed",
    //             C: "Clock Signals",
    //             D: "A and C",
    //             answer: 'D'
    //         },
    //         {
    //             question: "What are synchronous counters made of?",
    //             A: "Flip Flops and logic gates.",
    //             B: "Flip Flops only",
    //             C: "Multiplexers and Decoders",
    //             D: "None of the above",
    //             answer: 'A'
    //         },
    //         {
    //             question: "What is a logic gate?",
    //             A: "A type of memory",
    //             B: "A part of the ALU",
    //             C: "A device which interprets machine language",
    //             D: "A switch which implements boolean logic",
    //             answer: 'D'
    //         },
    //         {
    //             question: "A Flip Flop is also known as a:",
    //             A: "Bi-stable circuit",
    //             B: "Latch",
    //             C: "Parallel circuit",
    //             D: "Tri-stable circuit",
    //             answer: 'A'
    //         },
    //         {
    //             question: "Which is not a type of flip flop?",
    //             A: "JK",
    //             B: "D",
    //             C: "T",
    //             D: "Z",
    //             answer: 'D'
    //         },
    //         {
    //             question: "How many binary digits would be required when representing a sequence which has the largest value of 7?",
    //             A: "7",
    //             B: "128",
    //             C: "14",
    //             D: "14",
    //             answer: 'D'
    //         },
    //         {
    //             question: "What value does a clock have at the rising edge?",
    //             A: "2",
    //             B: "1",
    //             C: "0",
    //             D: "4",
    //             answer: 'B'
    //         },
    //
    //     ];

    let quiz1 =
        [
            {
                question: "What is a sequential circuit?",
                A: "A type of computer.",
                B: "A circuit whose output depends on the order or timing of the inputs.",
                C: "A way of simplifying Boolean Algebra.",
                D: "Another name for a combinational circuit.",
                answer: 'B',
                answerText: "A circuit whose output depends on the order or timing of the inputs."
            },
            {
                question: "What is a flip flop?",
                A: "A circuit that has two stable states and can be used to store state information.",
                B: "The internal fan of a computer.",
                C: "Another name for a CPU",
                D: "Another name for 0 addressing",
                answer: 'A',
                answerText: "A circuit that has two stable states and can be used to store state information."
            },
            {
                question: "Which flip flop mimics an exclusive OR in the characteristic table?",
                A: "JK.",
                B: "D",
                C: "T",
                D: "None of the above",
                answer: 'C',
                answerText: "T"
            },
            {
                question: "Which Flip Flop has two inputs(excluding the clock)?",
                A: "JK",
                B: "D",
                C: "T",
                D: "D & T",
                answer: 'A',
                answerText: "JK"
            },
            {
                question: "Which counters use a clock signal?",
                A: "Asynchronous ",
                B: "Synchronous",
                C: "Both",
                D: "None",
                answer: 'B',
                answerText: "Synchronous"
            },
            {
                question: "A 3 bit synchronous counter would use how many flip flops?",
                A: "2",
                B: "1",
                C: "3",
                D: "As much as you like",
                answer: 'C',
                answerText: "3"
            },
            {
                question: "A bidirectional counter has a sequence: 0, 3, 5, 4, 1, 2, 7, 6. How many flip flips does this counter have?",
                A: "4",
                B: "3",
                C: "7",
                D: "None of the above",
                answer: 'B',
                answerText: "3"
            },
            {
                question: "A T flip flop has A`B + AB` as its input. What other logic gate could be used in replacement of the two AND gates and the OR gate?",
                A: "NOR",
                B: "XOR",
                C: "NOT",
                D: "NAND",
                answer: 'B',
                answerText: 'XOR'
            },
            {
                question: "Which tables are needed to design any synchronous counter? (Assuming we want full marks)",
                A: "Excitation Table",
                B: "Excitation & Present-State, Next-State Tables",
                C: "Characteristic & Present-State, Next-State Tables",
                D: "Characteristics, Excitation & Present-State, Next-State Tables",
                answer: 'D',
                answerText: "Characteristics, Excitation & Present-State, Next-State Tables"
            }
        ];

    let quiz2 =
        [
            {
                question: "What is the binary representation of the sequence: 3, 1, 0, 2?",
                A: "11, 10, 00, 01",
                B: "10, 11, 00, 01",
                C: "11, 01, 00, 10",
                D: "01, 11, 10, 00",
                answer: 'C',
                answerText: "11, 01, 00, 10"
            },
            {
                question: "What is a counter?",
                A: "A program used to test computer performance.",
                B: "A device used to store the number of occurrences of a particular event.",
                C: "A device used to perform calculations.",
                D: "A circuit that changes code to signals",
                answer: 'B',
                answerText: "A device used to store the number of occurrences of a particular event."
            },
            {
                question: "What is the difference between a synchronous and asynchronous counter?",
                A: "Inputs",
                B: "Clock Speed",
                C: "Clock Signals",
                D: "A and C",
                answer: 'D',
                answerText: "A and C"
            },
            {
                question: "What are synchronous counters made of?",
                A: "Flip Flops and logic gates.",
                B: "Flip Flops only",
                C: "Multiplexers and Decoders",
                D: "None of the above",
                answer: 'A',
                answerText: "Flip Flops and logic gates."
            },
            {
                question: "What is a logic gate?",
                A: "A type of memory",
                B: "A part of the ALU",
                C: "A device which interprets machine language",
                D: "A switch which implements boolean logic",
                answer: 'D',
                answerText: "A switch which implements boolean logic."
            },
            {
                question: "A Flip Flop is also known as a:",
                A: "Bi-stable circuit",
                B: "Latch",
                C: "Parallel circuit",
                D: "Tri-stable circuit",
                answer: 'A',
                answerText: "Bi-stable circuit"
            },
            {
                question: "Which is not a type of flip flop?",
                A: "JK",
                B: "D",
                C: "T",
                D: "Z",
                answer: 'D',
                answerText: "Z"
            },
            {
                question: "How many binary digits would be required when representing a sequence which has the largest value of 7?",
                A: "7",
                B: "128",
                C: "14",
                D: "14",
                answer: 'D',
                answerText: "14"
            },
            {
                question: "What value does a clock have at the rising edge?",
                A: "2",
                B: "1",
                C: "0",
                D: "4",
                answer: 'B',
                answerText: "1"
            }
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
    $("#submit-answers1").click(function(){
        let answers = $("form.mult").serializeArray();
        $(".preloader-wrapper").show();
        setTimeout(function () {
            $(".preloader-wrapper").hide();
        },400);
        // $('.modal').modal('open');
        setTimeout(function() {
            $('.modal1').modal('open')}, 500);
        $('#submit-answers1').prop('disabled', true);
        checkAnswers1(answers);
    });
    function checkAnswers1(data)
    {
        for (let i = 0; quiz1.length; i++)
        {
            if(quiz1[i].answer === data[i].value)
            {
                count++;
                console.log("correct");
            }
            else
            {
                $(".collection").append(`<li class="collection-item hoverable">` + quiz1[i].answerText + `</li>`);
                console.log(quiz1[i].answerText);
            }
        }
        if (count === quiz1.length)
        {

        }
    }

    $("#submit-answers2").click(function(){
        let answers = $("form.mult").serializeArray();
        $(".preloader-wrapper").show();
        setTimeout(function () {
            $(".preloader-wrapper").hide();
        },400);
        // $('.modal').modal('open');
        setTimeout(function() {
            $('.modal2').modal('open')}, 500);
        $('#submit-answers2').prop('disabled', true);
        checkAnswers2(answers);
    });
    function checkAnswers2(data)
    {
        for (let i = 0; quiz2.length; i++)
        {
            if(quiz2[i].answer === data[i].value)
            {
                count++;
            }
            else
            {
                $(".collection").append(`<li class="collection-item hoverable">` + quiz2[i].answerText + `</li>`);
            }
        }
        if (count === quiz2.length)
        {

        }
    }

});

