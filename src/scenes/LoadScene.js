import { CST } from "../CST"
export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.LOAD
        })
    }
    init(){

    }
    preload(){
        //load images,
        this.load.image("bg", "./assets/bg.jpg");

        this.load.image("map", "./assets/map.png");

        this.load.image("quit", "./assets/quit.png");

        this.load.image("title", "./assets/title.png");

        this.load.image("play", "./assets/play.png");

        this.load.image("options", "./assets/options.png");

        this.load.image("on", "./assets/on.png");

        this.load.image("off", "./assets/off.png");

        this.load.image("exit", "./assets/exit.png");

        this.load.image("loading", "./assets/loading.png");

        this.load.image("volume", "./assets/volume.png");

        this.load.image("back", "./assets/back.png");

        this.load.audio("title_music", "./assets/title_music.mp3");

        this.load.spritesheet("smorc", "./assets/smorc.png",{
            frameHeight: 64,
            frameWidth: 64
        });

        // this.load.atlas("character", "./assets/smorc,png", "./assets/smorc,png")

        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0x5555ff
            }
        })

        //large load

        for(let i = 0; i < 100; i++){
            this.load.spritesheet("smorc" + i, "./assets/smorc.png",{
                frameHeight: 32,
                frameWidth: 32
            });
        }

        this.load.on("progress", (percent)=>{
            let loadingText = this.add.image(390,290, "loading");
            loadingText.setScale(0.7);
            loadingBar.fillRoundedRect(230, 335, 320 * percent, 50, 5);
            loadingBar.lineStyle(10, 0x666666, 1);
            loadingBar.strokeRoundedRect(230, 335, 320, 50, 5);
            
        })
        this.load.on("complete", ()=>{
            
            console.log("done");
            
        })

    }
    create(){
        this.scene.start(CST.SCENES.MENU, "hello from loadscene");

        this.add.image(0,0, "loading").setOrigin(0);

    }
}