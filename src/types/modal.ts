interface modal {
    visible: boolean,
    setVisible(visible: boolean): void;
}

export interface modals {
    studentModal: modal,
    graphModal: modal
}
