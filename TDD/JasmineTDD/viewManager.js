class ViewManager {
    constructor(textManager, targetEls) {
        if (textManager.constructor !== TextManager) {
            throw Error('잘못된 textManager 인스턴스가 전달되었습니다!');
        }

        if (!targetEls.btnEl || !targetEls.viewerEl || !targetEls.inpEl) {
            throw Error('전달받지 못한 요소가 있습니다!');
        }

        this.inpEl = targetEls.inpEl;
        this.viewerEl = targetEls.viewerEl;
        this.textManager = textManager;

        targetEls.btnEl.addEventListener('click', () => {
            this.changeValue();
        });
    }

    changeValue() {
        this.textManager.setValue({ data: this.inpEl.value });
        this.updateView();
    }


    updateView() {
        this.viewerEl.textContent = this.textManager.getValue();
    }
}