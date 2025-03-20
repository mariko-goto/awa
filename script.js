document.addEventListener("DOMContentLoaded", function () {
    let canvasUnder = document.getElementById("canvasUnder");

    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    let centerMinX = screenWidth * 0.2;  // 中央エリアの開始X座標
    let centerMaxX = screenWidth * 0.8;  // 中央エリアの終了X座標
    let centerMinY = screenHeight * 0.2; // 中央エリアの開始Y座標
    let centerMaxY = screenHeight * 0.8; // 中央エリアの終了Y座標

    // 泡を 100 個追加（中央エリアには配置しない）
    for (let i = 0; i < 100; i++) {
        let posX, posY;
        
        do {
            posX = Math.random() * screenWidth;
            posY = Math.random() * screenHeight;
        } while (posX > centerMinX && posX < centerMaxX && posY > centerMinY && posY < centerMaxY);

        let bubble = document.createElement("div");
        bubble.className = "canvasUnderReactingBlock";

        // 🫧 【方法①】完全ランダムサイズ（30px ~ 100px）
        let size = Math.random() * 140 + 60; // 30 〜 100px のランダムサイズ

        // 🫧 【方法②】固定サイズ（40px, 60px, 80px）
        // let sizes = [40, 60, 80];
        // let size = sizes[Math.floor(Math.random() * sizes.length)];

        bubble.style.width = size + "px";
        bubble.style.height = size + "px";
        bubble.style.left = posX + "px";
        bubble.style.top = posY + "px";

        canvasUnder.appendChild(bubble);
    }

    // 🟢 マウスを動かすと泡が消える
    document.querySelectorAll(".canvasUnderReactingBlock").forEach((bubble) => {
        bubble.addEventListener("mousemove", function () {
            if (!this.classList.contains("move1")) {
                this.classList.add("move1"); // ちょっと消える
            } else {
                this.classList.add("reaction"); // 完全に消える
            }
        });
    });

    // 🔴 クリックすると全部の泡が一気に消える
    document.addEventListener("click", function () {
        document.querySelectorAll(".canvasUnderReactingBlock").forEach((bubble) => {
            bubble.classList.add("reaction");
        });
    });
});
