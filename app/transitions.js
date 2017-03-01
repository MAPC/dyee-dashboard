export default function(){
  this.transition(
    this.toRoute('applicants.show'),
    this.use('fade')
  );
};