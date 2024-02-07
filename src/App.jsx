import React from 'react';
import StickerList from './StickerList';
import stickers from './stickers.json';
function App(){
    return(
        <StickerList stickers={stickers} />
    );
}

export default App