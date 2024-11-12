describe('클릭이벤트, 뷰를 관리하는 viewManager 를 테스트합니다.', () => {

    it('viewManager 에 textManager 가 인자로 잘 전달되었는지 확인합니다.', () => {

        const textManager = null;
        const btnEl = document.createElement('button');
        const viewerEl = document.createElement('strong');
        const inpEl = document.createElement('input');


        const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpEl });

        // 매쳐 함수. throw error 가 잘 작동하는지 검증합니다.
        expect(actual).toThrowError();
    });

    it('viewManager 에 요소 인자들이 잘 전달되었는지 확인합니다.', () => {

        const textManager = new TextManager();
        const btnEl = document.createElement('button');
        const viewerEl = document.createElement('strong');
        const inpEl = null;

        const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpEl });

        expect(actual).toThrowError();

    });

    const textManager = new TextManager();
    const btnEl = document.createElement('button');
    const viewerEl = document.createElement('strong');
    const inpEl = document.createElement('input');
    const viewManager = new ViewManager(textManager, { btnEl, viewerEl, inpEl });

    it('click 이벤트가 발생했을때 changeValue 함수가 호출이 되고 있는가?', () => {

        // 특정한 모듈의 함수를 감시합니다.
        spyOn(viewManager, 'changeValue');

        btnEl.click();

        // toHaveBeenCalled : 함수가 호출이 된적이 있는지 판별합니다.
        expect(viewManager.changeValue).toHaveBeenCalled();

    });


    it('changeValue 함수가 호출되었을 때 updateView 함수가 호출되는가?', () => {
        spyOn(viewManager, 'updateView');

        viewManager.changeValue();

        expect(viewManager.updateView).toHaveBeenCalled();
    });
});