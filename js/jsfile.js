
function headingFunc() {
    const pageTitle = document.querySelector('#page_title');
    pageTitle.classList.add('title');
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(headingFunc, 5000);
});

const showHide1 = () => {
  let readMoreDiv = document.querySelector("#moreOne");
  if (readMoreDiv.classList.contains("show")) {
    readMoreDiv.classList.remove("show");

    setTimeout(() => {
      btn1.textContent = "Read More";
    }, 1000);
  } else {
    readMoreDiv.classList.add("show");
    setTimeout(() => {
      btn1.textContent = "Read Less";
    }, 1000);
  }
};

document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', showHide1);
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('mainHeader');

    header.addEventListener('mouseenter', function() {
        
        header.style.backgroundImage = "url('images/general.jpg')";
    });

    header.addEventListener('mouseleave', function() {
       
        header.style.backgroundImage = "url('images/header.jpg')";
    });
});


function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });
    alert(`You scored ${score} out of ${questions.length}`);
}

document.addEventListener('DOMContentLoaded', function() {
    const source = document.getElementById('Website-template').innerHTML;
    const template = Handlebars.compile(source);

    const context = {
        websiteMakers: [
            {
                "name": "Shauna Ryan",
                "role": "Designer",
                "Age": 26
            },
            {
                "name": "Shauna Ryan",
                "role": "Coder",
                "Age": 35
            },
            {
                "name": "Susan Borne",
                "role": "Dancer",
                "Age": 41
            },
            {
                "name": "Jack Dawn",
                "role": "Karate",
                "Age": 29
            }
        ]
    };

    const html = template(context);
    document.getElementById('Website-container').innerHTML = html;
});

