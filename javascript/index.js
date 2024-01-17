// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction("steak", 0, (step1) => {
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;

  getInstruction("steak", 1, (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;

    getInstruction("steak", 2, (step3) => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;

      getInstruction("steak", 3, (step4) => {
        document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;

        getInstruction("steak", 4, (step5) => {
          document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#steakImg").removeAttribute("hidden");

          getInstruction("steak", 5, (step6) => {
            document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
            document.querySelector("#steakImg").removeAttribute("hidden");

            getInstruction("steak", 6, (step7) => {
              document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
              document.querySelector("#steakImg").removeAttribute("hidden");

              getInstruction("steak", 7, (step8) => {
                document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
                document.querySelector("#steakImg").removeAttribute("hidden");

              }, (error) => console.log(error));

            }, (error) => console.log(error));

          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

  



// Iteration 2 - using promises
obtainInstruction("brusselsSprouts", 0)
  .then((step) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("brusselsSprouts", 1)
  })
  .then((step2) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("brusselsSprouts", 2)
  })
  .then((step3) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("brusselsSprouts", 3)
  })
  .then((step4) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("brusselsSprouts", 4)
  })
  .then((step5) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("brusselsSprouts", 5)
  })
  .then((step6) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("brusselsSprouts", 6)
  })
  .then((step7) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction("brusselsSprouts", 7)
  })
  .then((step8) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step8}</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    return obtainInstruction("brusselsSprouts", 8)

  })


  .catch((error) => console.log(error));


// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    for (let i = 0; i <= 6; i++) {
      if (i < 6) {
        const step = await obtainInstruction("broccoli", i);
        document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
      }
      if (i == 6) {
        document.querySelector("#broccoli").innerHTML += `<li>Broccoli are ready!</li>`;
        document.getElementById("broccoliImg").removeAttribute("hidden");
      }
    }
  } catch (error) {
    console.log("Error Async!");
  }
}
makeBroccoli();


// ...

// Bonus 2 - Promise all
// ...