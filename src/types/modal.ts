interface modal {
    visible: boolean,
    setVisible(visible: boolean): void;
}

export interface modals {
    studentModal: modal,
    studentAddModal: modal,
    histogramModal: modal,
    pieChartModal: modal,
    graphModal: modal
}
