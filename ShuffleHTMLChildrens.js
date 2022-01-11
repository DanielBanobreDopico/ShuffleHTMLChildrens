/** Class representing a shuffle machine */
class ShuffleHTMLChildrens {
    /**
     * Create a shuffle machine.
     * @param {string} parentQuerySelector - Query selector string for searching Node for shuffle childs.
     * @param {object} locationParameters - Object with window.location attribute values for triggering shuffling.
     */
    constructor(parentQuerySelector, locationParameters = {}, keepFirstQuerySelector = null, keepLastQuerySelector = null ) {
        this.locationParameters = locationParameters;
        this.parentQuerySelector = parentQuerySelector;
        this.addLoadListener();
        this.keepFirstQuerySelector = keepFirstQuerySelector;
        this.keepLastQuerySelector = keepLastQuerySelector;
    }

    /**
     * Search for the parent Node for shuffle childs.
     * @returns {Node} - The parent Node.
     */
    getParent() {
        return document.querySelector(this.parentQuerySelector);
    }

    /**
     * Verify if window.location fits conditions for triggering shuffling.
     * @returns {Boolean}
     */
    verifyLocation() {
        const validAttributes = Object.keys(this.locationParameters).filter( attr => window.location.hasOwnProperty(attr));
        return validAttributes.every( attr => this.locationParameters[attr] === window.location[attr])
    }

    /**
     * Window onload event handler for trying to do the shuffling.
     */
    shuffle() {
        if ( this.verifyLocation() ) {
            const parent = this.getParent();
            if ( parent ) {
                if (parent.children.length < 1 || !parent.hasOwnProperty("children")) console.warn(`There is nothing to shuffle in ${this.parentQuerySelector}.`);
                const first = this.keepFirstQuerySelector ? parent.querySelector(this.keepFirstQuerySelector) : null;
                const last = this.keepLastQuerySelector ? parent.querySelector(this.keepLastQuerySelector) : null;
                // Move random element to last position.
                // Reverse counter avoid to move already moved elements.
                for ( let   i = parent.children.length - 1 ; i > -1 ; i-- ) {
                    parent.appendChild(
                        // Add an existing child remove it from original position automatically.
                        parent.children[Math.round(Math.random()*i)]
                    );
                }
                // Move first and last elements, if any
                if ( first ) parent.insertBefore(first, parent.childNodes[0]);
                if ( last ) parent.appendChild(last);
            } else {
                throw new ShuffleError(`There isn't a ${this.parentQuerySelector} node.`);
            }
        }
    }

    /**
     * Add this.shuffle as onload listener. Invoqued by constructor.
     */
    addLoadListener() {
        window.addEventListener("load",()=>this.shuffle());
    }
}

/**
 * Custom error.
 */
class ShuffleError extends Error {
    constructor(message) {
        super(message);
        this.name = "ShuffleError";
    }
}