export default function(){
  this.transition(
    this.toRoute('applicants.show'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.toRoute('jobs.show'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};