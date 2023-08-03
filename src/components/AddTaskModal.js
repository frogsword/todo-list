const AddTaskModal = (() => {
    const modal = document.createElement('div');
    modal.innerHTML = 
    `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Name</span>
                <input type="text" class="form-control task-input" aria-label="Name" aria-describedby="basic-addon1" maxlength="30">
            </div>
                
            <div class="input-group">
                <span class="input-group-text">Description</span>
                <textarea class="form-control task-input" aria-label="Description"></textarea>
            </div>

            <div class="input-group mb-3" style="margin-top: 15px;">
                <span class="input-group-text" id="basic-addon1">Due Date</span>
                <input type="date" class="form-control task-input" aria-label="Date" aria-describedby="basic-addon1">
            </div>

            <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Priority</label>
            <select class="form-select" id="inputGroupSelect01">
                <option selected value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            </div>

            <div class="input-group mb-3">
            <label class="input-group-text" for="choose-project">List</label>
            <select class="form-select" id="choose-project">
                <option selected value="General">General</option>
            </select>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary confirm-add-task" data-bs-dismiss="modal">Save Task</button>
          </div>
        </div>
      </div>
    </div>
    `;

    return modal;
})

export default AddTaskModal;