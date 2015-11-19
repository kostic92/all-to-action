(function($) {
    $(document).ready(function() {
        //��� ������� �� ������ � id="save"
        $('#save').click(function() {
            //���������� formValid
            var formValid = true;
            //��������� ��� �������� ���������� input
            $('input').each(function() {
                //����� �������, ������� ����� ����� .form-group, ��� ������������ success/error
                var formGroup = $(this).parents('.form-group');
                //����� glyphicon, ������� ������������ ��� ������ ������ ������ ��� ������
                var glyphicon = formGroup.find('.form-control-feedback');
                //��� ��������� ������ ���������� HTML5 ������� checkValidity
                if (this.checkValidity()) {
                    //�������� � formGroup ����� .has-success, ������� has-error
                    formGroup.addClass('has-success').removeClass('has-error');
                    //�������� � glyphicon ����� glyphicon-ok, ������� glyphicon-remove
                    glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
                } else {
                    //�������� � formGroup ����� .has-error, ������� .has-success
                    formGroup.addClass('has-error').removeClass('has-success');
                    //�������� � glyphicon ����� glyphicon-remove, ������� glyphicon-ok
                    glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
                    //�������� ����� ��� ����������
                    formValid = false;
                }
            });
            //���� ����� �������, ��
            if (formValid) {
                //������ ��������� ����
                $('#callback-form').modal('hide');
                //���������� ��������� �� ������
                $('#success-alert').removeClass('hidden');
            }
        });
    });
})(jQuery);