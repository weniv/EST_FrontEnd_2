describe('텍스트 관리자 테스트 모음입니다.', () => {

    const textManager = new TextManager();

    it('관리하고 있는 텍스트 값을 반환합니다.', () => {
        const initValue = textManager.getValue();

        expect(textManager.getValue()).toBe(initValue);
    });

    it('관리하고 있는 텍스트 값을 수정합니다.', () => {
        const newValue = { data: 'hello weniv' };

        textManager.setValue(newValue);

        expect(textManager.getValue()).toBe(newValue.data);
    });
});