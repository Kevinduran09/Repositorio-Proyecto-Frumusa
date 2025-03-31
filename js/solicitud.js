const fields = document.querySelectorAll('.text_field, .password, .number_field, .textarea');

fields.forEach(field => {
    const label = document.querySelector(`label[for="${field.id}"]`);

    if (label) {
        field.addEventListener('focus', () => {
            label.style.top = '-20px';
            label.style.fontSize = '12px';
            label.style.color = '#2c662d';
        });

        field.addEventListener('blur', () => {
            if (field.value === '') {
                label.style.top = '50%';
                label.style.fontSize = '16px';
                label.style.color = '#999';
            }
        });
    }
});

