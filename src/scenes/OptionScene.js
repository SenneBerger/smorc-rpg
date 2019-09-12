import { CST } from "../CST"
export class OptionScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.OPTIONS
        })
    }
    init(){
        
    }
    preload(){
        this.load.image("back", "./assets/back.png");
    }
    create(){

        this.add.image(0,0, "bg").setOrigin(0);

        this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.25, "title");

        let backButton = this.add.image(700,50, "back");

        // this.sound.pauseOnBlur = false;
        // this.sound.play("title_music", {
        //     loop: true
        // })


        backButton.setInteractive();

        backButton.on ("pointerover", ()=>{
            backButton.setScale(1.3);
        })

        backButton.on ("pointerout", ()=>{
            backButton.setScale(1);         
        })

        backButton.on ("pointerup", ()=>{   
            this.sound.stopAll("title_music")  
            this.scene.start(CST.SCENES.MENU)      
        })
    }
}