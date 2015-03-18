import {Behavior} from 'aurelia-templating';
import {Router} from 'aurelia-router'
import {config} from './component-config'
import {Ainterface} from 'interface'
import {AiComponents} from 'interface'

export class BtnComponent{

    static metadata(){
        return Behavior
            .attachedBehavior('ai-btn')
            .withOptions().and((x)=>{
                x.withProperty('glyphicon');
                x.withProperty('position');
                x.withProperty('faIcon', 'faIconChanged', 'fa-icon');
                x.withProperty('color');
                x.withProperty('text');
                x.withProperty('waves');
                x.withProperty('size');
                x.withProperty('link');
                x.withProperty('icon');
                x.withProperty('bg');
            })
            .noView();
    }

    static inject(){
        return [Element, Router, Ainterface, AiComponents];
    }

    constructor(element, router, ainterface, aiComponents){
        this.componentId  = 'btnComponent';
        this.interface    = ainterface;
        this.aiComponents = aiComponents;
        this.aiComponents.register(this.componentId, this, config);
        this.config       = this.aiComponents.getConfig(this.componentId);
        this.element = element;
        this.eventListeners = [];

        this.navigate = (url)=>{
            router.navigate(url)
        }
    }

    bind(){}

    unbind(){
        this.eventListeners.length &&( this.unbindEvents() );
    }

    unbindEvents(){
        for(let index of this.eventListeners){
           (typeof this[this.eventListeners[index]] === 'function') &&( this[this.eventListeners[index]]() )
        }
    }

    attached(){
        this.element.classList.add(this.config.current.className);
        this.waves     &&( this.wavesChanged(this.waves) );
        this.color     &&( this.colorChanged(this.color) );
        this.size      &&( this.sizeChanged(this.size)   );
        this.faIcon    &&( this.faIconChanged(this.faIcon) );
        this.icon      &&( this.iconChanged(this.icon) );
        this.glyphicon &&( this.glyphiconChanged(this.glyphicon) );
        // this.attachLink();
    }

    attachLink(){
        let _linkHandle = (evt)=>{
            console.log('link')
            evt.preventDefault();
            this.navigate(this.link);
        }

        if (this.link) {

            this._linkHandler = _linkHandle;
            this.element.addEventListener('click', this._linkHandler);
            this.detatchLink = ()=>{
                this.element.removeEventListener('click', this._linkHandler);
                this._linkHandler = null;
            }
            this.eventListeners.push('detatchLink');
        }
    }

    wavesChanged(waves){
        this.waves &&( this.element.classList.add(this.config.current.waves.className) )
        this.propertyChanged('waves', waves);
    }

    colorChanged(color){
        this.propertyChanged('color', color);
    }

    sizeChanged(size){
        this.propertyChanged('size', size);
    }

    propertyChanged(property, value){
        this[`__${property}`] &&( this.element.classList.remove(this[`__${property}`]) );
        let className = this.config.current[property].prefix ? this.config.current[property].prefix : '';
        className += this.config.current[property][value];
        this.element.classList.add(className);
        this[`__${property}`] = className;
    }

    faIconChanged(icon){
        this.faIcon    && this.createIcon('faIcon');
    }
    glyphiconChanged(icon){
        this.glyphicon && this.createIcon('glyphicon');
    }
    iconChanged(icon){
        this.icon      && this.createIcon('icon');
    }
    createIcon(type){
        var classList = [];
        if(config.prefixes[type]){
            console.log(config.prefixes[type])
            classList.push(config.prefixes[type], `${config.prefixes[type]}-${this[type]}`);
        } else {
            classList.push(this[type])
        }
        let isIcon = this.element.getElementsByTagName('i')[0]
        let icon = isIcon || document.createElement('I');
        icon.classList.add.apply(icon.classList, classList);
        this.iconElement = icon;
        if (!isIcon) {
            this.element.insertBefore(this.iconElement, this.element.firstChild);
        }
    }
}
