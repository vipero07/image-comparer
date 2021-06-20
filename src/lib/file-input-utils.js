export const getFilesFromDropEvent = ({ dataTransfer: { files, items } }) => {
    return files.length
        ? [...files]
        : items
            .filter(({ kind }) => kind === "file")
            .map(({ getAsFile }) => getAsFile());
}

export const getFilesFromInputEvent = ({ target }) => {
    const files = target.files ? [...target.files] : [];
    target.value = "";
    return files;
}