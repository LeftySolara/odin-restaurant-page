function populateContactTab() {
    let phoneNumber = document.createElement("p");
    tabContent.innerHTML = "Phone: (123) 456-789";

    let emailAddress = document.createElement("p");
    emailAddress.innerHTML = "Email: abc@example.com";

    let tabContentContainer = document.querySelector("#tabContent");
    tabContentContainer.appendChild(phoneNumber);
    tabContentContainer.appendChild(emailAddress);
    tabContentContainer.classList = ["overlay"];
    tabContentContainer.style.width = "33%";
}

export default populateContactTab;

