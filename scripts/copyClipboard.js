const copyButtonLabel = "\u{1F5D0}";
                
let blocks = document.querySelectorAll("code");
blocks.forEach((block) => {
if (navigator.clipboard) {
    let button = document.createElement("button");

    button.innerText = copyButtonLabel;
    block.appendChild(button);

    button.addEventListener("click", async () => {
    await copyCode(block);
    });
}
});

async function copyCode(block) {
let text = block.innerText;
text = text.substring(0, text.length - 2);
await navigator.clipboard.writeText(text);
}