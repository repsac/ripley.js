/**
 * @author Ed Caspersen
 */

var Ripley = { VERSION: '0.0.0' };

Ripley.signals = {
    createCamera: new signals.Signal(),
    activeCamera: new signals.Signal(),
    registerCamera: new signals.Signal(),
    camera: new signals.Signal(),
    cameras: new signals.Signal()
};
