import React from "react";

function ResultContent({match}) {
    const idx = match.params.idx;
    console.log('idx ::', idx);
}

export default ResultContent;