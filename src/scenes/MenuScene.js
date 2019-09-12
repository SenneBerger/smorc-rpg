import { CST } from "../CST"
export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.MENU
        })
    }
    init(data){
        console.log(data);
        console.log("i got it");
        
        
    }
    preload(){

    }
    create(){

        this.add.image(0,0, "bg").setOrigin(0);

        this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.25, "title");

        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.55, "play");

        let optionsButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.67, "options");

        let exitButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.79, "exit");

        let volumeButton = this.add.image(this.game.renderer.width * 0.90, this.game.renderer.height * 0.92, "volume");

        // let onButton = this.add.image(this.game.renderer.width * 0.87, this.game.renderer.height * 0.88, "on");
        
        // let offButton = this.add.image(this.game.renderer.width * 0.92, this.game.renderer.height * 0.88, "off");

        let hoverSprite = this.add.sprite(this.x,this.y, "smorc");
        hoverSprite.setVisible(false);

        //menu music

       let bgMusic = this.sound.pauseOnBlur = false;
        let music = this.sound.play("title_music", {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        })  


        this.anims.create({
            key: "walk",
            frameRate: 8,
            repeat: -1, //
            frames: this.anims.generateFrameNumbers("smorc", {
                start: 131,
                end: 138,
            })
        })

        playButton.setInteractive();

        playButton.on ("pointerover", ()=>{
            console.log("hover");
            playButton.setScale(1.3);
            hoverSprite.setVisible(true);
            hoverSprite.play("walk");
            hoverSprite.x = hoverSprite.y - playButton.width / 2 + 30;
            hoverSprite.y = playButton.y   
                  
        })

        playButton.on ("pointerout", ()=>{
            console.log("get out");
            playButton.setScale(1);
            hoverSprite.setVisible(false);          
        })

        playButton.on ("pointerup", ()=>{
            console.log("START SMORCIN");
            this.scene.start(CST.SCENES.PLAY)
            
        })

        optionsButton.setInteractive();

        optionsButton.on ("pointerover", ()=>{
            optionsButton.setScale(1.3);

        })

        optionsButton.on ("pointerout", ()=>{
            optionsButton.setScale(1);  
            hoverSprite.setVisible(false);         
        })

        optionsButton.on ("pointerup", ()=>{   
            this.sound.stopAll("title_music") 
            this.scene.start(CST.SCENES.OPTIONS)      
        })

        exitButton.setInteractive();

        exitButton.on ("pointerover", ()=>{
            exitButton.setScale(1.3);

        })

        exitButton.on ("pointerout", ()=>{
            exitButton.setScale(1);         
            hoverSprite.setVisible(false);  
        })

        exitButton.on ("pointerup", ()=>{
             
        })

        volumeButton.setInteractive();

        volumeButton.on ("pointerover", ()=>{
            volumeButton.setScale(1.3);

        })

        volumeButton.on ("pointerout", ()=>{
            volumeButton.setScale(1);         
            hoverSprite.setVisible(false);  
        })

        volumeButton.on ("pointerup", ()=>{
            this.sound.stopAll("title_music")
            music.mute(true)
        })


    }
}