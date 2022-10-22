
const toggle = document.querySelector('#nav_toggle') ;
const remove = document.querySelector('#iconremove');

toggle.addEventListener('click', function(){
    document.querySelector('.menu_table').classList.toggle('active') ;
})

remove.addEventListener('click',function(){
    document.querySelector('.menu_table').classList.remove('active') ;
})
var hieuung = () => {
    Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'Thêm vào giỏ hàng thành công',
        showConfirmButton: false,
        timer: 1500
      })
}
var hieuungxoa = () => {
    Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'Xóa sản phẩm thành công',
        showConfirmButton: false,
        timer: 1500
      })
}

var xacnhan = () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Bạn chắc chắn chưa ?',
        text: "Nếu bạn nhập sai thì sẽ không được hàng",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Xác nhận',
        cancelButtonText: 'Cancel',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Đặt hàng thành công',
            'Sản phẩm sẽ được giao đến bạn sớm nhất ',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
}

