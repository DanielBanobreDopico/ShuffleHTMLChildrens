class ShuffleHTMLChilds {
    
    constructor(parentQuerySelector, locationParameters = {} ) {
        this.locationParameters = locationParameters;
        this.parentQuerySelector = parentQuerySelector;
        this.addLoadListener();
    }

    getParent() {
        return document.querySelector(this.parentQuerySelector);
    }

    verifyLocation() {
        const validAttributes = Object.keys(this.locationParameters).filter( attr => window.location.hasOwnProperty(attr));
        return validAttributes.every( attr => this.locationParameters[attr] === window.location[attr])
    }

    shuffle() {
        console.log(this)
        if ( this.verifyLocation() ) {
            const parent = this.getParent(this);
            if ( parent ) {
                // Move random element to last position.
                // Reverse counter avoid to move already moved elements.
                for ( let   i = parent.children.length - 1 ; i > -1 ; i-- ) {
                    parent.appendChild(
                        // Add a existing child remove it from original position
                        parent.children[Math.round(Math.random()*i)]
                    );
                    //TODO: Clone parent and remove original childs for true random order
                }
            }
        }
    }

    addLoadListener() {
        window.addEventListener("load",()=>this.shuffle());
    }
}