    function createManagerCard(manager) {
        const managerCard = document.createElement("h2");
        managerCard.classList.add("col-4", "mt-4");
    
        const card = document.createElement("h2");
        card.classList.add("card", "h-100");
        managerCard.appendChild(card);
    
        const cardHeader = document.createElement("h2");
        cardHeader.classList.add("card-header");
        card.appendChild(cardHeader);
    
        const name = document.createElement("employeeName");
        name.textContent = manager.name;
        cardHeader.appendChild(name);
    
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);
    
        const id = document.createElement("employeeId");
        id.classList.add("id");
        id.textContent = `ID: ${manager.id}`;
        cardBody.appendChild(id);
    
        const email = document.createElement("employeeEmail");
        email.classList.add("email");
        email.textContent = `Email: `;
        const emailLink = document.createElement("a");
        emailLink.href = `mailto:${manager.email}`;
        emailLink.textContent = manager.email;
        email.appendChild(emailLink);
        cardBody.appendChild(email);

        const github = document.createElement ("employeeGit");
        github.classList.add("employeeGit");
        github.textContent = 'github: ${manager.github}';
        cardBody.appendChild(employeeGit);

        const officeNumber = document.createElement("employeeEmail");
        officeNumber.classList.add("office");
        officeNumber.textContent = `Office Number: ${manager.officeNumber}`;
        cardBody.appendChild(officeNumber);
    
        return managerCard;
    }