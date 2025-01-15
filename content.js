function extractQuizletData() {
    const textElements = Array.from(document.querySelectorAll('.TermText'));

    // Group every two elements as term and definition
    const result = [];
    for (let i = 0; i < textElements.length; i += 2) {
        const term = textElements[i]?.textContent.trim() || 'Term not found';
        const definition = textElements[i + 1]?.textContent.trim() || 'Definition not found';
        result.push({ term, definition });
    }

    return result;
}

function cleanData(data) {
    return data.map(item => ({
        term: item.term.replace(/[\u200B-\u200D\uFEFF]/g, ''), // Remove ZWSP and similar
        definition: item.definition.replace(/[\u200B-\u200D\uFEFF]/g, '') // Remove ZWSP and similar
    }));
}


console.log(extractQuizletData());



function downloadAsJson(data) {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quizlet-set.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function addDownloadButton() {

    const button = document.createElement('button');
    button.textContent = 'Download JSON';
    button.addEventListener('click', () => {
        const data = cleanData(extractQuizletData());
        downloadAsJson(data);
    });
    document.body.insertBefore(button, document.body.firstChild);
}

addDownloadButton();
