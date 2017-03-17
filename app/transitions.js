export default function(){
  this.transition(
    this.toRoute('applicants.show'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};