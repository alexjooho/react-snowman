function AlphaButtons({letters, disabled=false}) {
    return letters.split("").map(ltr => (
        <button id={ltr}
            key={ltr}
            value={ltr}
            disabled={disabled}
        >
          {ltr}
        </button>
    ));
}

export default AlphaButtons