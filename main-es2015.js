(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <button mat-icon-button [matMenuTriggerFor]=\"userMenu\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <div [ngSwitch]=\"currentUser.op\">\r\n    <mat-menu #userMenu=\"matMenu\">\r\n\r\n      <div *ngSwitchCase=\"true\">\r\n        <div [ngSwitch]=\"user.voice\">\r\n          <div *ngSwitchCase=\"false\">\r\n            <button mat-menu-item (click)=\"grantVoice()\">\r\n\r\n              <span>Grant Voice</span>\r\n            </button>\r\n          </div>\r\n          <div *ngSwitchCase=\"true\">\r\n            <button mat-menu-item (click)=\"revokeVoice()\">\r\n\r\n              <span>Revoke Voice</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div [ngSwitch]=\"user.op\">\r\n          <div *ngSwitchCase=\"false\">\r\n            <button mat-menu-item (click)=\"grantOp()\">\r\n\r\n              <span>Grant Op</span>\r\n            </button>\r\n          </div>\r\n          <div *ngSwitchCase=\"true\">\r\n            <button mat-menu-item (click)=\"revokeOp()\">\r\n\r\n              <span>Revoke Op</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <button mat-menu-item (click)=\"kickFromRoom()\">\r\n\r\n          <span>Kick</span>\r\n        </button>\r\n\r\n      </div>\r\n      <div *ngSwitchCase=\"false\">\r\n        <button mat-menu-item>\r\n\r\n          <span>No Rights</span>\r\n        </button>\r\n      </div>\r\n    </mat-menu>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-siedebar></app-siedebar>-->\r\n    <router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/change-pw/change-pw.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-pw/change-pw.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content [formGroup]=\"changePwForm\">\r\n  <p>Change Password</p>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Enter your current password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"oldPassword\" (click)=\"resetErrorMsg()\">\r\n    <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n    </button>\r\n    <mat-error *ngIf=\"changePwForm.get('oldPassword').invalid\">required</mat-error>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field hintLabel=\"Min 6 characters\">\r\n    <input matInput #inputPW minlength=\"6\" maxlength=\"20\" placeholder=\"Enter your new password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"newPassword\" (click)=\"resetErrorMsg()\">\r\n    <mat-hint align=\"end\">{{inputPW.value?.length || 6}}/20</mat-hint>\r\n    <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n    </button>\r\n    <mat-error *ngIf=\"changePwForm.get('newPassword').invalid\">required</mat-error> \r\n  </mat-form-field>\r\n  <mat-error>{{errorMsg}}</mat-error>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button [disabled]='changePwForm.invalid' (click)=\"onSubmit()\">Ok</button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/change-user-name/change-user-name.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-user-name/change-user-name.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <p>Change Name</p>\r\n\r\n  <mat-form-field hintLabel=\"Max 20 characters\" class=\"example-full-width\">\r\n    <input matInput #inputName maxlength=\"20\" placeholder=\"Enter name\" [formControl]=\"nameForm\">\r\n    <mat-hint align=\"end\">{{inputName.value?.length || 0}}/20</mat-hint>\r\n    <mat-error *ngIf=\"nameForm.invalid\">{{getErrorMessageName()}}</mat-error>\r\n  </mat-form-field>\r\n  \r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button [disabled]='nameForm.invalid' (click)=\"onSubmit()\">Ok</button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-box/chat-box.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-box/chat-box.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\r\n\r\n  <div *ngFor=\"let finalmessage of finalMessages\">\r\n\r\n    <p><b>{{finalmessage[0].time.getDate()}}.{{finalmessage[0].time.getMonth() + 1}}.{{finalmessage[0].time.getFullYear()}}\r\n        {{ finalmessage[0].userName }}</b>:</p>\r\n\r\n    <div class=\"speech-bubble\">\r\n      <div *ngFor=\"let message of finalmessage\">\r\n        {{message.time.getHours()}}:{{message.time.getMinutes()}} {{ message.message }}\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</cdk-virtual-scroll-viewport>\r\n\r\n\r\n<div class=\"form-style-3\">\r\n  <label><span>Message</span></label>\r\n  <!--<input type=\"text\" id=\"message\" [(ngModel)]=\"messageText\">-->\r\n\r\n  <textarea name=\"field6\" class=\"textarea-field\" type=\"text\" id=\"message\" [(ngModel)]=\"messageText\"></textarea>\r\n  <label class=\"center\"><span> </span><button (click)=\"sendMessage(messageText)\">Send</button></label>\r\n  <!--<button (click)=\"sendMessage(messageText)\">Send</button>-->\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-list/chat-list.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-list/chat-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n  <mat-tab label=\"All\">\r\n    <mat-accordion>\r\n      <mat-expansion-panel [expanded]=\"true\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>Room 1</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n\r\n        <mat-list>\r\n          <mat-list-item *ngFor=\"let user of users\">\r\n            <img\r\n              matListAvatar\r\n              src=\"../../assets/imgs/hideout-favicon.png\"\r\n              alt=\"hideout-avatar\"\r\n            />\r\n            <h3 matLine>{{ user.name }}</h3>\r\n            <p matLine class=\"userState\">\r\n              <span> {{ user.state }}</span>\r\n            </p>\r\n            <p matLine class=\"userStatus\">\r\n              <span class=\"demo-2\"> -- {{ user.status }}</span>\r\n            </p>\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item>\r\n                <mat-icon>message</mat-icon>\r\n                <span>Send direct message</span>\r\n              </button>\r\n              <button mat-menu-item>\r\n                <mat-icon>block</mat-icon>\r\n                <span>Block user</span>\r\n              </button>\r\n              <button mat-menu-item disabled>\r\n                <mat-icon>report</mat-icon>\r\n                <span>Report user</span>\r\n              </button>\r\n            </mat-menu>\r\n          </mat-list-item>\r\n        </mat-list>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </mat-tab>\r\n  <mat-tab>\r\n    <ng-template mat-tab-label>\r\n      <mat-icon>group</mat-icon>\r\n      Rooms\r\n    </ng-template>\r\n    <p>Joined Rooms</p>\r\n    <p>...</p>\r\n  </mat-tab>\r\n\r\n  <mat-tab>\r\n    <ng-template mat-tab-label>\r\n      <mat-icon>message</mat-icon>\r\n      Messages\r\n    </ng-template>\r\n    <p>direct messages</p>\r\n    <p>...</p>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-main/chat-main.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-main/chat-main.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-siedebar></app-siedebar>-->\r\n<div class=\"wrapper\">\r\n\r\n  <div class=\"box21\">\r\n    <app-chat-room-select (room)=\"currentRoom.next($event)\" (roomsEventEmitter)=\"rooms=$event\"\r\n      [usersWithRoomAndRights]=\"usersWithRoomAndRights\"></app-chat-room-select>\r\n  </div>\r\n  <div class=\"box11\">\r\n    <app-usersettings></app-usersettings>\r\n  </div>\r\n  <div class=\"box31\">\r\n    <app-people-in-room (usersWithRoomAndRights)=\"usersWithRoomAndRights.next($event)\"></app-people-in-room>\r\n  </div>\r\n  <div class=\"boxChat\">\r\n    <app-chat-box [room]=\"currentRoom\" [rooms]=\"rooms\" [usersWithRoomAndRights]=\"usersWithRoomAndRights\"></app-chat-box>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-room-select/chat-room-select.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-room-select/chat-room-select.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\r\n    \r\n      <div *ngFor=\"let room of rooms\">\r\n       <span *ngIf=\"currentRoom == room.roomName\" >\r\n          <button class=\"buttonSize\"  mat-button color=\"warn\" (click)=\"newRoomValue(room.roomName)\"> {{room.roomName}} </button>\r\n\r\n       </span>\r\n\r\n       <span *ngIf=\"currentRoom != room.roomName\" >\r\n      <button class=\"buttonSize\"  mat-button color=\"primary\" (click)=\"newRoomValue(room.roomName)\"> {{room.roomName}} </button>\r\n       </span>\r\n     <!--  <button mat-list-item (click)=\"leaveRoomButtonClicked(room.roomName)\"> Leave </button>-->\r\n      <span *ngIf=\"getCurrentUserByRoom(room.roomName)\">\r\n        <app-room-settings [currentUser]=\"getCurrentUserByRoom(room.roomName)\" [room]=\"room\"></app-room-settings>\r\n      </span>\r\n    </div>\r\n    \r\n    </cdk-virtual-scroll-viewport>\r\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/invite/invite.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/invite/invite.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <p>Select a User</p>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input type=\"text\" placeholder=\"Username\" aria-label=\"Username\" matInput [formControl]=\"myControl\"\r\n      [matAutocomplete]=\"auto\">\r\n    <mat-error *ngIf=\"myControl.invalid\">{{getErrorMessage()}}</mat-error>\r\n    <mat-autocomplete #auto=\"matAutocomplete\">\r\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n        {{option}}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n  <div mat-dialog-actions>\r\n    <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n    <button mat-button [disabled]='myControl.invalid' (click)=\"onSubmit()\">Ok</button>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\r\n\r\n<div [formGroup]=\"loginForm\">\r\n  <div class=\"example-container\">\r\n    \r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Enter your email\" formControlName=\"email\" (click)=\"resetErrorMsg()\">\r\n        <mat-error *ngIf=\"loginForm.get('email').invalid\">{{getErrorMessageEmail()}}</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n          <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" required (click)=\"resetErrorMsg()\">\r\n          <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n          </button>\r\n          <mat-error *ngIf=\"loginForm.get('password').invalid\">You must enter a value</mat-error>\r\n          \r\n      </mat-form-field>\r\n\r\n      <mat-error>{{errorMsg}}</mat-error>\r\n      <button mat-button (click)=\"onSubmit()\" [disabled]=\"!loginForm.valid\">Login</button>\r\n\r\n      <button mat-button routerLink=\"/register\">Register</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/people-in-room/people-in-room.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/people-in-room/people-in-room.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\r\n  <div *ngFor=\"let user of users\">\r\n    <app-user-type [user]=\"user\"></app-user-type>\r\n    {{user.name}}\r\n    ({{user.email}})\r\n    -> {{user.roomName}}\r\n    <app-admin [user]=\"user\" [room]=\"user.roomName\" [currentUser]=\"getCurrentUserForRoom(user.roomName)\"></app-admin>\r\n  </div>\r\n</cdk-virtual-scroll-viewport>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\r\n\r\n<div [formGroup]=\"registerForm\">\r\n    <div class=\"example-container\">\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Enter your email\" formControlName=\"email\">\r\n            <mat-error *ngIf=\"registerForm.get('email').invalid\">{{getErrorMessageEmail()}}</mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field hintLabel=\"Max 20 characters\">\r\n            <input matInput #inputName maxlength=\"20\" placeholder=\"Enter name\" formControlName=\"name\">\r\n            <mat-hint align=\"end\">{{inputName.value?.length || 0}}/20</mat-hint>\r\n            <mat-error *ngIf=\"registerForm.get('name').invalid\">{{getErrorMessageName()}}</mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field hintLabel=\"Min 6 characters\">\r\n            <input matInput #inputPW minlength=\"6\" maxlength=\"20\" placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password1\">\r\n            <mat-hint align=\"end\">{{inputPW.value?.length || 6}}/20</mat-hint>\r\n            <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            </button>\r\n            <mat-error *ngIf=\"registerForm.get('password1').invalid\">required</mat-error>\r\n            \r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"retry password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password2\">\r\n            <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            </button>\r\n            <mat-error *ngIf=\"registerForm.get('password2').invalid\">{{getErrorMessagePW()}}</mat-error>\r\n            \r\n        </mat-form-field>\r\n\r\n    <button mat-button (click)=\"onSubmit()\" [disabled]=\"!registerForm.valid\">Register</button>\r\n    <button mat-button routerLink=\"/login\">Back to Login</button>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/room-settings/room-settings.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/room-settings/room-settings.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <button mat-icon-button [matMenuTriggerFor]=\"roomMenu\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <div [ngSwitch]=\"currentUser.op\">\r\n    <mat-menu #roomMenu=\"matMenu\">\r\n\r\n      <div *ngSwitchCase=\"true\">\r\n        <div [ngSwitch]=\"room.voice\">\r\n          <div *ngSwitchCase=\"true\">\r\n\r\n            <button mat-menu-item (click)=\"revokeVoiceFromRoom()\">\r\n\r\n              <span>Revoke Voice from Room</span>\r\n\r\n            </button>\r\n          </div>\r\n          <div *ngSwitchCase=\"false\">\r\n\r\n            <button mat-menu-item (click)=\"setVoiceToRoom()\">\r\n\r\n              <span>Set Voice to Room</span>\r\n\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div [ngSwitch]=\"room.inviteRequired\">\r\n          <div *ngSwitchCase=\"false\">\r\n\r\n            <button mat-menu-item (click)=\"setRommPrivate()\">\r\n\r\n              <span>Set Room to Private</span>\r\n            </button>\r\n\r\n          </div>\r\n          <div *ngSwitchCase=\"true\">\r\n\r\n            <button mat-menu-item (click)=\"setRoomPublic()\">\r\n\r\n              <span>Set Room to Public</span>\r\n            </button>\r\n\r\n          </div>\r\n        </div>\r\n        <button mat-menu-item (click)=\"openInviteDialog()\">\r\n\r\n          <span>Invite to Room</span>\r\n        </button>\r\n\r\n      </div>\r\n      <div *ngSwitchCase=\"false\">\r\n        <button mat-menu-item>\r\n\r\n          <span>No Rights</span>\r\n        </button>\r\n      </div>\r\n      <button mat-menu-item (click)=\"leaveRoom()\">\r\n\r\n        <span>Leave Room</span>\r\n\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/siedebar/siedebar.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/siedebar/siedebar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"mainToolbar\" color=\"primary\">\r\n  <button mat-icon-button (click)=\"onSidenavToggle()\">\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n\r\n  <span>Hideout</span>\r\n  <span class=\"spacer\"></span>\r\n  <mat-icon class=\"toolbar-icon\">favorite</mat-icon>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item>\r\n      <mat-icon>settings</mat-icon>\r\n      <span>Settings</span>\r\n    </button>\r\n    <button mat-menu-item disabled>\r\n      <mat-icon>report</mat-icon>\r\n      <span>Report user</span>\r\n    </button>\r\n    <button mat-menu-item>\r\n      <mat-icon>power_settings_new</mat-icon>\r\n      <span>Log out</span>\r\n    </button>\r\n  </mat-menu>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container id=\"sidenavContainer\" class=\"container\" >\r\n  <mat-sidenav\r\n    #sidenav\r\n    id=\"sidenav\"\r\n    class=\"sidenav\"\r\n    mode=\"side\"\r\n    [class.menu-open]=\"isSidenavOpen\"\r\n    [class.menu-close]=\"!isSidenavOpen\"\r\n    opened\r\n  >\r\n    <mat-list>\r\n      <mat-list-item>\r\n        <img\r\n          matListAvatar\r\n          class=\"matListAvatarMain\"\r\n          src=\"../assets/imgs/hideout-favicon.png\"\r\n          alt=\"hideout-avatar\"\r\n        />\r\n        <p matLine class=\"userNameMain\">John Doe</p>\r\n        <p matLine class=\"userStateMain\">\r\n          <span> Online</span>\r\n        </p>\r\n        <p matLine class=\"userStatusMain\">\r\n          <span class=\"demo-2\"> -- \"Carpe Diem\"</span>\r\n        </p>\r\n        <button mat-icon-button [matMenuTriggerFor]=\"userMenu\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-menu #userMenu=\"matMenu\">\r\n          <button mat-menu-item [matMenuTriggerFor]=\"state_menu\">\r\n            <mat-icon>fiber_manual_record</mat-icon>\r\n            <span>Change state</span>\r\n          </button>\r\n          <mat-menu #state_menu=\"matMenu\">\r\n            <button mat-menu-item>\r\n              <mat-icon>fiber_manual_record</mat-icon>\r\n              <span>Online</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <mat-icon>fiber_manual_record</mat-icon>\r\n              <span>Offline</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <mat-icon>fiber_manual_record</mat-icon>\r\n              <span>Beschäftigt</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <mat-icon>fiber_manual_record</mat-icon>\r\n              <span>Abwesend</span>\r\n            </button>\r\n          </mat-menu>\r\n          <button mat-menu-item>\r\n            <mat-icon>format_quote</mat-icon>\r\n            <span>Change status</span>\r\n          </button>\r\n        </mat-menu>\r\n      </mat-list-item>\r\n\r\n      <mat-list-item>\r\n        <button class=\"menu-item\" mat-flat-button>\r\n          <mat-icon>dashboard</mat-icon>\r\n          Rooms\r\n        </button>\r\n      </mat-list-item>\r\n\r\n      <mat-accordion>\r\n        <mat-expansion-panel\r\n          class=\"mat-elevation-z0\"\r\n          [expanded]=\"expand\"\r\n          [disabled]=\"state\"\r\n        >\r\n          <mat-expansion-panel-header [ngStyle]=\"{ 'padding-left.px': 0 }\">\r\n            <mat-list-item class=\"menu-item-title\">\r\n              <mat-icon>person_pin</mat-icon>\r\n              <span>Admins</span>\r\n            </mat-list-item>\r\n          </mat-expansion-panel-header>\r\n\r\n          <mat-list-item *ngFor=\"let admin of admins\">\r\n            <img\r\n              matListAvatar\r\n              class=\"matListAvatar\"\r\n              src=\"../assets/imgs/hideout-favicon.png\"\r\n              alt=\"hideout-avatar\"\r\n            />\r\n            <p matLine class=\"userName\">{{ admin.name }}</p>\r\n            <p matLine class=\"userState\">\r\n              <span> {{ admin.state }}</span>\r\n            </p>\r\n            <p matLine class=\"userStatus\">\r\n              <span class=\"demo-2\"> -- {{ admin.status }}</span>\r\n            </p>\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button mat-menu-item>\r\n                <mat-icon>message</mat-icon>\r\n                <span>Send direct message</span>\r\n              </button>\r\n            </mat-menu>\r\n          </mat-list-item>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </mat-list>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content [ngStyle]=\"{ 'margin-left.px': contentMargin }\">\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-type/user-type.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-type/user-type.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matTooltip]=\"getUserType(user)\">\r\n    <mat-icon [style.color]=\"getColor(user)\">fiber_manual_record</mat-icon>\r\n</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/usersettings/usersettings.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/usersettings/usersettings.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"usersettings\">\r\n  <mat-icon>settings</mat-icon>\r\n</button>\r\n<mat-menu #usersettings=\"matMenu\">\r\n  <button mat-menu-item (click)=\"openDialogChangePW()\">\r\n    <mat-icon>edit</mat-icon>\r\n    <span>Change PW</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"openDialogChangeUserName()\">\r\n    <mat-icon>redo</mat-icon>\r\n    <span>Change name</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"logout()\">\r\n    <mat-icon>power_settings_new</mat-icon>\r\n    <span>Log out</span>\r\n  </button>\r\n</mat-menu>"

/***/ }),

/***/ "./src/app/Classes/Validation.ts":
/*!***************************************!*\
  !*** ./src/app/Classes/Validation.ts ***!
  \***************************************/
/*! exports provided: Validation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validation", function() { return Validation; });
class Validation {
    static isValidUser(options) {
        return (control) => {
            const selectedUser = options.filter(email => email == control.value);
            if (selectedUser.length > 0) {
                return null;
            }
            else
                return { selectedUser: true };
        };
    }
    static compareValidator(controlNameToCompare) {
        return (control) => {
            if (control.value === null || control.value.lenght === 0) {
                return null;
            }
            const controlToCompare = control.root.get(controlNameToCompare);
            if (controlToCompare) {
                const sub = controlToCompare.valueChanges.subscribe(() => {
                    control.updateValueAndValidity();
                    sub.unsubscribe();
                });
            }
            return controlToCompare && controlToCompare.value !== control.value ? { compare: true } : null;
        };
    }
}


/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-db.service */ "./src/app/chat-db.service.ts");



let AdminComponent = class AdminComponent {
    constructor(chatdb) {
        this.chatdb = chatdb;
    }
    ngOnInit() {
    }
    grantOp() {
        this.chatdb.grantOp(this.room, this.user.email, true);
    }
    revokeOp() {
        this.chatdb.grantOp(this.room, this.user.email, false);
    }
    kickFromRoom() {
        this.chatdb.inviteToRoom(this.room, this.user.email, false);
        this.chatdb.kickUser(this.room, this.user.email);
    }
    grantVoice() {
        this.chatdb.GrantVoice(this.room, this.user.email, true);
    }
    revokeVoice() {
        this.chatdb.GrantVoice(this.room, this.user.email, false);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AdminComponent.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AdminComponent.prototype, "room", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AdminComponent.prototype, "currentUser", void 0);
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_db_service__WEBPACK_IMPORTED_MODULE_2__["ChatDBService"]])
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_main_chat_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-main/chat-main.component */ "./src/app/chat-main/chat-main.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-list/chat-list.component */ "./src/app/chat-list/chat-list.component.ts");








//default
//{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'chat', component: _chat_main_chat_main_component__WEBPACK_IMPORTED_MODULE_3__["ChatMainComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'chat-list', component: _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_7__["ChatListComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_db_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./chat-db.service */ "./src/app/chat-db.service.ts");
/* harmony import */ var _chat_main_chat_main_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./chat-main/chat-main.component */ "./src/app/chat-main/chat-main.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _chat_room_select_chat_room_select_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./chat-room-select/chat-room-select.component */ "./src/app/chat-room-select/chat-room-select.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./chat-list/chat-list.component */ "./src/app/chat-list/chat-list.component.ts");
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./chat-box/chat-box.component */ "./src/app/chat-box/chat-box.component.ts");
/* harmony import */ var _siedebar_siedebar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./siedebar/siedebar.component */ "./src/app/siedebar/siedebar.component.ts");
/* harmony import */ var _people_in_room_people_in_room_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./people-in-room/people-in-room.component */ "./src/app/people-in-room/people-in-room.component.ts");
/* harmony import */ var _invite_invite_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./invite/invite.component */ "./src/app/invite/invite.component.ts");
/* harmony import */ var _room_settings_room_settings_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./room-settings/room-settings.component */ "./src/app/room-settings/room-settings.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _user_type_user_type_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./user-type/user-type.component */ "./src/app/user-type/user-type.component.ts");
/* harmony import */ var _usersettings_usersettings_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./usersettings/usersettings.component */ "./src/app/usersettings/usersettings.component.ts");
/* harmony import */ var _change_pw_change_pw_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./change-pw/change-pw.component */ "./src/app/change-pw/change-pw.component.ts");
/* harmony import */ var _change_user_name_change_user_name_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./change-user-name/change-user-name.component */ "./src/app/change-user-name/change-user-name.component.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");




// Material section














// Routing






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
            _chat_main_chat_main_component__WEBPACK_IMPORTED_MODULE_21__["ChatMainComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
            _chat_room_select_chat_room_select_component__WEBPACK_IMPORTED_MODULE_26__["ChatRoomSelectComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_27__["RegisterComponent"],
            _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_28__["ChatListComponent"],
            _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_29__["ChatBoxComponent"],
            _siedebar_siedebar_component__WEBPACK_IMPORTED_MODULE_30__["SiedebarComponent"],
            _people_in_room_people_in_room_component__WEBPACK_IMPORTED_MODULE_31__["PeopleInRoomComponent"],
            _invite_invite_component__WEBPACK_IMPORTED_MODULE_32__["InviteComponent"],
            _room_settings_room_settings_component__WEBPACK_IMPORTED_MODULE_33__["RoomSettingsComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_34__["AdminComponent"],
            _user_type_user_type_component__WEBPACK_IMPORTED_MODULE_35__["UserTypeComponent"],
            _usersettings_usersettings_component__WEBPACK_IMPORTED_MODULE_36__["UsersettingsComponent"],
            _change_pw_change_pw_component__WEBPACK_IMPORTED_MODULE_37__["ChangePWComponent"],
            _change_user_name_change_user_name_component__WEBPACK_IMPORTED_MODULE_38__["ChangeUserNameComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
            // Material
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__["ScrollDispatchModule"]
        ],
        entryComponents: [_invite_invite_component__WEBPACK_IMPORTED_MODULE_32__["InviteComponent"], _change_pw_change_pw_component__WEBPACK_IMPORTED_MODULE_37__["ChangePWComponent"], _change_user_name_change_user_name_component__WEBPACK_IMPORTED_MODULE_38__["ChangeUserNameComponent"]],
        providers: [_chat_db_service__WEBPACK_IMPORTED_MODULE_20__["ChatDBService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            return true;
        }
        else {
            this.router.navigateByUrl("/login");
            return false;
        }
    }
};
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], AuthGuardService);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-db.service */ "./src/app/chat-db.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AuthService = class AuthService {
    constructor(chatDBService) {
        this.chatDBService = chatDBService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.currentUser = this.currentUserSubject.asObservable();
        chatDBService.registerOnMessageSubject((event) => {
            switch (event.type) {
                case "LoggedIn":
                    const user = event.value;
                    this.currentUserSubject.next(user);
                    break;
                case "LoggedOut":
                    this.currentUserSubject.next(null);
                    break;
                case "UserRenamed":
                    const renamedUser = event.value;
                    this.currentUserSubject.next(renamedUser);
                    break;
                default:
                    break;
            }
        });
    }
    registerOnUserSubject(callback) {
        this.currentUserSubject.subscribe(callback);
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(userCredentials) {
        this.timer = this.chatDBService.stableLogin(userCredentials);
    }
    clearTimer() {
        clearInterval(this.timer);
    }
    logout() {
        this.chatDBService.logout(this.timer);
        this.currentUserSubject.next(null);
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_db_service__WEBPACK_IMPORTED_MODULE_2__["ChatDBService"]])
], AuthService);



/***/ }),

/***/ "./src/app/change-pw/change-pw.component.scss":
/*!****************************************************!*\
  !*** ./src/app/change-pw/change-pw.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wdy9jaGFuZ2UtcHcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/change-pw/change-pw.component.ts":
/*!**************************************************!*\
  !*** ./src/app/change-pw/change-pw.component.ts ***!
  \**************************************************/
/*! exports provided: ChangePWComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePWComponent", function() { return ChangePWComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _chat_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chat-db.service */ "./src/app/chat-db.service.ts");





let ChangePWComponent = class ChangePWComponent {
    constructor(dialogRef, data, formBuilder, chatDBService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.chatDBService = chatDBService;
        chatDBService.registerOnMessageSubject(event => {
            switch (event.type) {
                case "ChangePasswordFailed":
                    this.errorMsg = "Wrong Password, pls retry";
                    break;
                case "ChangedUserPassword":
                    this.dialogRef.close({ passwordChanged: true });
                    break;
                default:
                    break;
            }
        });
    }
    ngOnInit() {
        this.changePwForm = this.formBuilder.group({
            oldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    get f() { return this.changePwForm.controls; }
    onNoClick() {
        this.dialogRef.close({ passwordChanged: false });
    }
    resetErrorMsg() {
        this.errorMsg = "";
    }
    onSubmit() {
        const oldPassword = this.f.oldPassword.value;
        const newPassword = this.f.newPassword.value;
        this.chatDBService.changeUserPassword(this.data.email, oldPassword, newPassword);
    }
};
ChangePWComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-pw',
        template: __webpack_require__(/*! raw-loader!./change-pw.component.html */ "./node_modules/raw-loader/index.js!./src/app/change-pw/change-pw.component.html"),
        styles: [__webpack_require__(/*! ./change-pw.component.scss */ "./src/app/change-pw/change-pw.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _chat_db_service__WEBPACK_IMPORTED_MODULE_4__["ChatDBService"]])
], ChangePWComponent);



/***/ }),

/***/ "./src/app/change-user-name/change-user-name.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/change-user-name/change-user-name.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXVzZXItbmFtZS9DOlxcVXNlcnNcXFZ1IFRydW9uZ1xcTmV4dGNsb3VkXFxQcm9qZWN0c1xcY2hhdHJvb20tYW5ndWxhci9zcmNcXGFwcFxcY2hhbmdlLXVzZXItbmFtZVxcY2hhbmdlLXVzZXItbmFtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbmdlLXVzZXItbmFtZS9jaGFuZ2UtdXNlci1uYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS11c2VyLW5hbWUvY2hhbmdlLXVzZXItbmFtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9IiwiLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/change-user-name/change-user-name.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/change-user-name/change-user-name.component.ts ***!
  \****************************************************************/
/*! exports provided: ChangeUserNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeUserNameComponent", function() { return ChangeUserNameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _chat_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat-db.service */ "./src/app/chat-db.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let ChangeUserNameComponent = class ChangeUserNameComponent {
    constructor(dialogRef, data, chatDBService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.chatDBService = chatDBService;
        this.chatDBService.registerOnMessageSubject(event => {
            switch (event.type) {
                case "UserRenamed":
                    this.dialogRef.close({ email: event.value.email, name: event.value.name });
                    break;
                default:
                    break;
            }
        });
    }
    ngOnInit() {
        this.nameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_]*')]);
    }
    getErrorMessageName() {
        return this.nameForm.hasError('required') ? 'You must enter a value' :
            this.nameForm.hasError('pattern') ? 'pattern asdf_dd' :
                '';
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onSubmit() {
        const newName = this.nameForm.value;
        this.chatDBService.renameUser(this.data.email, newName);
    }
};
ChangeUserNameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-user-name',
        template: __webpack_require__(/*! raw-loader!./change-user-name.component.html */ "./node_modules/raw-loader/index.js!./src/app/change-user-name/change-user-name.component.html"),
        styles: [__webpack_require__(/*! ./change-user-name.component.scss */ "./src/app/change-user-name/change-user-name.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _chat_db_service__WEBPACK_IMPORTED_MODULE_3__["ChatDBService"]])
], ChangeUserNameComponent);



/***/ }),

/***/ "./src/app/chat-box/chat-box.component.scss":
/*!**************************************************!*\
  !*** ./src/app/chat-box/chat-box.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".borderSolid {\n  border-style: solid;\n}\n\n.borderGroove {\n  border-style: groove;\n}\n\n.speech-bubble {\n  position: relative;\n  background: #00aabb;\n  border-radius: 0.4em;\n}\n\n.speech-bubble:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: 16px solid transparent;\n  border-bottom-color: #00aabb;\n  border-top: 0;\n  border-left: 0;\n  margin-left: -8px;\n  margin-top: -16px;\n}\n\n.preference {\n  display: flex;\n  justify-content: space-between;\n  width: 60%;\n  margin: 0.5rem;\n}\n\n.form-style-3 {\n  font-family: \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\n}\n\n.form-style-3 label {\n  display: block;\n  margin-bottom: 10px;\n}\n\n.form-style-3 label > span {\n  float: left;\n  width: 90%;\n  color: #F072A9;\n  font-weight: bold;\n  font-size: 13px;\n  text-shadow: 1px 1px 1px #fff;\n}\n\n.form-style-3 textarea {\n  width: 90%;\n  height: 50px;\n}\n\n.form-style-3 textarea {\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border: 1px solid #FFC2DC;\n  outline: none;\n  color: #F072A9;\n  padding: 5px 8px 5px 8px;\n  box-shadow: inset 1px 1px 4px #FFD5E7;\n  -moz-box-shadow: inset 1px 1px 4px #FFD5E7;\n  -webkit-box-shadow: inset 1px 1px 4px #FFD5E7;\n  background: #FFEFF6;\n  width: 90%;\n}\n\n.required {\n  color: red;\n  font-weight: normal;\n}\n\n.box {\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.boxMiddle {\n  height: 200px;\n  width: 400px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -200px;\n}\n\n.center {\n  text-align: center;\n}\n\n.example-viewport {\n  height: 100%;\n  width: 90%;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1ib3gvQzpcXFVzZXJzXFxWdSBUcnVvbmdcXE5leHRjbG91ZFxcUHJvamVjdHNcXGNoYXRyb29tLWFuZ3VsYXIvc3JjXFxhcHBcXGNoYXQtYm94XFxjaGF0LWJveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhdC1ib3gvY2hhdC1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksb0JBQUE7QUNBSjs7QURHQTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0FEOztBREdBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNBRDs7QURHQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQUo7O0FES0E7RUFFQywrREFBQTtBQ0hEOztBREtBO0VBQ0MsY0FBQTtFQUNBLG1CQUFBO0FDRkQ7O0FESUE7RUFDQyxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ0REOztBRElBO0VBQ0MsVUFBQTtFQUNBLFlBQUE7QUNERDs7QURJQTtFQUNDLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHFDQUFBO0VBQ0EsMENBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0csVUFBQTtBQ0RKOztBRE1BO0VBQ0MsVUFBQTtFQUNBLG1CQUFBO0FDSEQ7O0FET0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7QUNKSjs7QURRQTtFQUVJLGFBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFVBO0VBQ0ksa0JBQUE7QUNQSjs7QURVQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUNQSjs7QURVRTtFQUNFLFlBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtYm94L2NoYXQtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlclNvbGlke1xyXG5cclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbi5ib3JkZXJHcm9vdmV7XHJcbiAgICBib3JkZXItc3R5bGU6IGdyb292ZTtcclxufVxyXG5cclxuLnNwZWVjaC1idWJibGUge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRiYWNrZ3JvdW5kOiAjMDBhYWJiO1xyXG5cdGJvcmRlci1yYWRpdXM6IC40ZW07XHJcbn1cclxuXHJcbi5zcGVlY2gtYnViYmxlOmFmdGVyIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0Ym9yZGVyOiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICMwMGFhYmI7XHJcblx0Ym9yZGVyLXRvcDogMDtcclxuXHRib3JkZXItbGVmdDogMDtcclxuXHRtYXJnaW4tbGVmdDogLThweDtcclxuXHRtYXJnaW4tdG9wOiAtMTZweDtcclxufVxyXG5cclxuLnByZWZlcmVuY2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IC41cmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi5mb3JtLXN0eWxlLTN7XHJcblx0XHJcblx0Zm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4uZm9ybS1zdHlsZS0zIGxhYmVse1xyXG5cdGRpc3BsYXk6YmxvY2s7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm9ybS1zdHlsZS0zIGxhYmVsID4gc3BhbntcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogOTAlO1xyXG5cdGNvbG9yOiAjRjA3MkE5O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHR0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggI2ZmZjtcclxufVxyXG5cclxuLmZvcm0tc3R5bGUtMyB0ZXh0YXJlYXtcclxuXHR3aWR0aDo5MCU7XHJcblx0aGVpZ2h0OjUwcHg7XHJcbn1cclxuXHJcbi5mb3JtLXN0eWxlLTMgdGV4dGFyZWF7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNGRkMyREM7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRjb2xvcjogI0YwNzJBOTtcclxuXHRwYWRkaW5nOiA1cHggOHB4IDVweCA4cHg7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA0cHggI0ZGRDVFNztcclxuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggNHB4ICNGRkQ1RTc7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDRweCAjRkZENUU3O1xyXG5cdGJhY2tncm91bmQ6ICNGRkVGRjY7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4ucmVxdWlyZWR7XHJcblx0Y29sb3I6cmVkO1xyXG5cdGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxufVxyXG5cclxuXHJcbi5ib3h7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBcclxufVxyXG5cclxuLmJveE1pZGRsZXtcclxuXHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG5cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246Y2VudGVyXHJcbn1cclxuXHJcbi5leGFtcGxlLXZpZXdwb3J0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfSIsIi5ib3JkZXJTb2xpZCB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5ib3JkZXJHcm9vdmUge1xuICBib3JkZXItc3R5bGU6IGdyb292ZTtcbn1cblxuLnNwZWVjaC1idWJibGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICMwMGFhYmI7XG4gIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xufVxuXG4uc3BlZWNoLWJ1YmJsZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogMTZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwYWFiYjtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICBtYXJnaW4tdG9wOiAtMTZweDtcbn1cblxuLnByZWZlcmVuY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMC41cmVtO1xufVxuXG4uZm9ybS1zdHlsZS0zIHtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmZvcm0tc3R5bGUtMyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9ybS1zdHlsZS0zIGxhYmVsID4gc3BhbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogOTAlO1xuICBjb2xvcjogI0YwNzJBOTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICNmZmY7XG59XG5cbi5mb3JtLXN0eWxlLTMgdGV4dGFyZWEge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5mb3JtLXN0eWxlLTMgdGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGQzJEQztcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNGMDcyQTk7XG4gIHBhZGRpbmc6IDVweCA4cHggNXB4IDhweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA0cHggI0ZGRDVFNztcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDRweCAjRkZENUU3O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggNHB4ICNGRkQ1RTc7XG4gIGJhY2tncm91bmQ6ICNGRkVGRjY7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5yZXF1aXJlZCB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmJveE1pZGRsZSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLXZpZXdwb3J0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogOTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmV4YW1wbGUtaXRlbSB7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat-box/chat-box.component.ts":
/*!************************************************!*\
  !*** ./src/app/chat-box/chat-box.component.ts ***!
  \************************************************/
/*! exports provided: ChatBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBoxComponent", function() { return ChatBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-db.service */ "./src/app/chat-db.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





let ChatBoxComponent = class ChatBoxComponent {
    constructor(chatDBService, authService) {
        this.chatDBService = chatDBService;
        this.authService = authService;
        this.messages = [];
        this.roomMessages = [];
        this.finalMessages = [];
        this.messageText = "";
        //Aktuell ausgewähler Raum
        this.room = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("NoRoom");
        //Alle bekannten User mit ihrem Rechten und Räumen
        this.usersWithRoomAndRights = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        //Alle Räume mit ihren Einstellungen
        this.rooms = [];
    }
    ngOnInit() {
        this.room.subscribe((room) => { this.update(); });
        this.chatDBService.registerOnMessageSubject((event) => {
            switch (event.type) {
                case "MessageSendToRoom":
                    this.messages.push({ email: event.value.email, message: event.value.message, roomName: event.value.roomName, userName: event.value.userName, time: new Date() });
                    this.update();
                    break;
                case "UserRenamed":
                    this.messages.forEach((message) => {
                        if (message.email == event.value.email) {
                            message.userName = event.value.name;
                        }
                    });
                    this.update();
                    break;
            }
        });
    }
    // Sends a message to a room
    sendMessage(text) {
        let currentUserRights = this.getCurrentUserByRoom(this.room.value);
        let room = this.getRoomByRoomName(this.room.value);
        if (room && ((room.voice && currentUserRights != null && currentUserRights.voice == true) || !room.voice)) {
            this.chatDBService.sendMessageToRoom(this.room.value, text);
        }
        this.messageText = "";
    }
    updateRoomMessages() {
        this.roomMessages = this.messages.filter((message => {
            return message.roomName == this.room.value;
        }));
    }
    updateFinalMessages() {
        let index = 0;
        let lastMessage = null;
        this.finalMessages = [];
        this.roomMessages.forEach((roomMessage) => {
            if (this.finalMessages[index] == null) {
                this.finalMessages[index] = [];
            }
            if (lastMessage != null && (roomMessage.email != lastMessage.email || (roomMessage.time.getTime() - this.finalMessages[index][0].time.getTime()) >= (1000 * 60 * 60 * 24) || (roomMessage.time.getDate() - this.finalMessages[index][0].time.getDate()) >= 1)) {
                ++index;
                this.finalMessages[index] = [];
            }
            this.finalMessages[index].push(roomMessage);
            lastMessage = roomMessage;
        });
    }
    update() {
        this.updateRoomMessages();
        this.updateFinalMessages();
    }
    getCurrentUserByRoom(room) {
        if (this.usersWithRoomAndRights.value == null) {
            return null;
        }
        return this.usersWithRoomAndRights.value.find((user) => {
            return user.roomName == room && user.email == this.authService.currentUserValue.email;
        });
    }
    getRoomByRoomName(roomName) {
        return this.rooms.find((room) => {
            return room.roomName == roomName;
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"])
], ChatBoxComponent.prototype, "room", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"])
], ChatBoxComponent.prototype, "usersWithRoomAndRights", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ChatBoxComponent.prototype, "rooms", void 0);
ChatBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-box',
        template: __webpack_require__(/*! raw-loader!./chat-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat-box/chat-box.component.html"),
        styles: [__webpack_require__(/*! ./chat-box.component.scss */ "./src/app/chat-box/chat-box.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_db_service__WEBPACK_IMPORTED_MODULE_2__["ChatDBService"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], ChatBoxComponent);



/***/ }),

/***/ "./src/app/chat-db.service.ts":
/*!************************************!*\
  !*** ./src/app/chat-db.service.ts ***!
  \************************************/
/*! exports provided: ChatDBService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDBService", function() { return ChatDBService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ChatDBService = class ChatDBService {
    constructor() {
        this.onMessageObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"];
        //private onlineUsers: string[] = []
        this.onlineUsersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.connection = new WebSocket('ws://localhost:8080/chatSocket/');
        // Error listener
        this.connection.onerror = (error) => {
            console.log('WebSocket Error ' + error);
        };
        // Event listener
        this.connection.onmessage = (e) => {
            var o = JSON.parse(e.data);
            console.log("Server", o);
            this.subject.next(o);
        };
        this.registerOnMessageSubject((event) => {
            switch (event.type) {
                case "LoggedIn":
                    this.pushSubjectValue(event.value.email);
                    this.InformLogin();
                    break;
                case "LoginInformEvent":
                    if (!this.onlineUsersSubject.value.find((user) => {
                        return user == event.value.email;
                    })) {
                        this.pushSubjectValue(event.value.email);
                        this.InformLogin();
                    }
                    break;
                case "LogoutInformEvent":
                    this.onlineUsersSubject.next(this.onlineUsersSubject.value.filter((user) => {
                        return user != event.value.email;
                    }));
                    break;
                default:
                    break;
            }
        });
    }
    // Registriert einen Callback (Subject) welcher ausgeführt wird wenn die Datenbank ein Event schmeißt
    registerOnMessageSubject(callback) {
        this.subject.subscribe(callback);
    }
    //Sendet die Events an das Backend
    sendEvent(type, data) {
        const command = {
            type: type,
            value: data
        };
        if (this.connection.readyState === 1) {
            this.connection.send(JSON.stringify(command));
        }
        else {
            this.connection.onopen = () => {
                this.connection.send(JSON.stringify(command));
            };
        }
    }
    //Logt einen user aus, es ist möglich einen Timer zu übergeben falls der Stable Login genutzt wurde
    logout(timer = null) {
        if (timer != null) {
            clearInterval(timer);
        }
        this.InformLogout();
        this.sendEvent("Logout", {});
    }
    //Logt einen User im Intervall immerwieder erneut an, Default sind 10 Sek
    stableLogin(user, timeInMs = 10000) {
        this.tryLogin(user);
        return setInterval(() => {
            this.tryLogin(user);
        }, timeInMs);
    }
    // Logged sich als User ein.
    tryLogin(user) {
        this.sendEvent("Login", user);
    }
    //Betritt einen Raum
    joinRoom(room) {
        this.sendEvent("JoinRoom", { "roomName": room });
    }
    //Verlässt einen Raum
    leaveRoom(room) {
        this.sendEvent("LeaveRoom", { "roomName": room });
    }
    //Definiert für einen Raum, ob eine Einladung erforderlich ist
    setInviteRoom(roomName, inviteRequired) {
        this.sendEvent("SetInviteRoom", { roomName: roomName, inviteRequired: inviteRequired });
    }
    // Definiert, ob ein Raum moderiert ist, d.h. ob nur Personen mit Voice im Raum sprechen können.
    setVoiceRoom(roomName, voice) {
        this.sendEvent("SetVoiceRoom", { roomName: roomName, voice: voice });
    }
    // Gibt einer Person im Raum Operator Rechte
    grantOp(roomName, email, op) {
        this.sendEvent("GrantOp", { roomName: roomName, email: email, op: op });
    }
    //Gibt einer Person im Raum Voice
    GrantVoice(roomName, email, voice) {
        this.sendEvent("GrantVoice", { roomName: roomName, email: email, voice: voice });
    }
    //Sendet eine Message zu einem Raum
    sendMessageToRoom(roomName, text) {
        this.sendEvent("SendMessageToRoom", { "roomName": roomName, "message": text });
    }
    // Spricht eine Einladung für einen Raum aus.
    inviteToRoom(roomName, email, invite) {
        this.sendEvent("InviteToRoom", { roomName: roomName, email: email, invite: invite });
    }
    // Setzt das Password neu.
    changeUserPassword(email, oldPassword, newPassword) {
        this.sendEvent("ChangeUserPassword", { email: email, oldPassword: oldPassword, newPassword: newPassword });
    }
    // Registriert einen neuen User.
    registerUser(email, name, password) {
        this.sendEvent("RegisterUser", { email: email, name: name, password: password });
    }
    // Bennent den aktuellen Nutzer um.
    renameUser(email, userName) {
        this.sendEvent("RenameUser", { email: email, userName: userName });
    }
    kickUser(roomName, email) {
        this.sendEvent("KickCommand", { roomName: roomName, email: email });
    }
    InformLogin() {
        this.sendEvent("LoginInformCommand", {});
    }
    InformLogout() {
        this.sendEvent("LogoutInformCommand", {});
    }
    pushSubjectValue(value) {
        let onlineUsersSubjectValue = this.onlineUsersSubject.value;
        onlineUsersSubjectValue.push(value);
        this.onlineUsersSubject.next(onlineUsersSubjectValue);
    }
    getOnlineUsers() {
        return this.onlineUsersSubject.value;
    }
    registerToOnlineUsersSubject(callback) {
        this.onlineUsersSubject.subscribe(callback);
    }
};
ChatDBService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChatDBService);



/***/ }),

/***/ "./src/app/chat-list/chat-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/chat-list/chat-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chat-list/chat-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-list/chat-list.component.ts ***!
  \**************************************************/
/*! exports provided: ChatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListComponent", function() { return ChatListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatListComponent = class ChatListComponent {
    constructor() {
        this.users = [
            { name: 'user1', state: 'online', status: 'carpe diem' },
            { name: 'user2', state: 'offline', status: 'hello world' },
            { name: 'user3', state: 'online', status: 'langeweile~' }
        ];
    }
    ngOnInit() {
    }
};
ChatListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-list',
        template: __webpack_require__(/*! raw-loader!./chat-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat-list/chat-list.component.html"),
        styles: [__webpack_require__(/*! ./chat-list.component.scss */ "./src/app/chat-list/chat-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChatListComponent);



/***/ }),

/***/ "./src/app/chat-main/chat-main.component.scss":
/*!****************************************************!*\
  !*** ./src/app/chat-main/chat-main.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".boxCenterDown {\n  position: absolute;\n  width: 300px;\n  height: 600px;\n  margin-left: -150px;\n  bottom: 0px;\n  left: 50%;\n}\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 40%;\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n}\n\n.box32 {\n  grid-column: 2;\n  grid-row: 3;\n}\n\n.box11 {\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.box13 {\n  grid-column: 3;\n  grid-row: 1;\n}\n\n.box22 {\n  grid-column: 2;\n  grid-row: 2;\n}\n\n.box21 {\n  grid-column: 1;\n  grid-row: 2;\n}\n\n.box31 {\n  grid-column: 1;\n  grid-row: 3;\n}\n\n.boxChat {\n  grid-column: 2/4;\n  grid-row: 2/4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1tYWluL0M6XFxVc2Vyc1xcVnUgVHJ1b25nXFxOZXh0Y2xvdWRcXFByb2plY3RzXFxjaGF0cm9vbS1hbmd1bGFyL3NyY1xcYXBwXFxjaGF0LW1haW5cXGNoYXQtbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhdC1tYWluL2NoYXQtbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUdFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDRko7O0FES0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNGSjs7QURNRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtBQ0hKOztBRE1FO0VBRUUsY0FBQTtFQUNBLFdBQUE7QUNKSjs7QURPRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDSko7O0FET0U7RUFFRSxjQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRFFFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNMSjs7QURRRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDTEo7O0FEUUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRFFFO0VBRUUsZ0JBQUE7RUFDQSxhQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9jaGF0LW1haW4vY2hhdC1tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLmJveENlbnRlckRvd257XHJcblxyXG5cclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBoZWlnaHQ6NjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDotMTUwcHg7XHJcbiAgICBib3R0b206MHB4O1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgfVxyXG5cclxuICAuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuXHJcblxyXG4gIC53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTtcclxuICB9XHJcblxyXG4gIC5ib3gzMntcclxuXHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICAgIGdyaWQtcm93OiAzO1xyXG4gIH1cclxuXHJcbiAgLmJveDExe1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBncmlkLXJvdzogMTsgXHJcbiAgfVxyXG5cclxuICAuYm94MTN7XHJcblxyXG4gICAgZ3JpZC1jb2x1bW46IDM7XHJcbiAgICBncmlkLXJvdzogMTsgXHJcbiAgfVxyXG5cclxuICAuYm94MjJ7XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICAgIGdyaWQtcm93OiAyOyBcclxuICB9XHJcblxyXG4gIC5ib3gyMXtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDI7IFxyXG4gIH1cclxuXHJcbiAgLmJveDMxe1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBncmlkLXJvdzogMzsgXHJcbiAgfVxyXG5cclxuICAuYm94Q2hhdHtcclxuXHJcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XHJcbiAgICBncmlkLXJvdzogMiAvIDQ7XHJcbiAgfSIsIi5ib3hDZW50ZXJEb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDQwJTtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLWdhcDogMTBweDtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7XG59XG5cbi5ib3gzMiB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBncmlkLXJvdzogMztcbn1cblxuLmJveDExIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xufVxuXG4uYm94MTMge1xuICBncmlkLWNvbHVtbjogMztcbiAgZ3JpZC1yb3c6IDE7XG59XG5cbi5ib3gyMiB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBncmlkLXJvdzogMjtcbn1cblxuLmJveDIxIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAyO1xufVxuXG4uYm94MzEge1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDM7XG59XG5cbi5ib3hDaGF0IHtcbiAgZ3JpZC1jb2x1bW46IDIvNDtcbiAgZ3JpZC1yb3c6IDIvNDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat-main/chat-main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-main/chat-main.component.ts ***!
  \**************************************************/
/*! exports provided: ChatMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMainComponent", function() { return ChatMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ChatMainComponent = class ChatMainComponent {
    constructor() {
        this.currentRoom = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("NoRoom");
        this.usersWithRoomAndRights = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    ngOnInit() {
    }
};
ChatMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-main',
        template: __webpack_require__(/*! raw-loader!./chat-main.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat-main/chat-main.component.html"),
        styles: [__webpack_require__(/*! ./chat-main.component.scss */ "./src/app/chat-main/chat-main.component.scss")]
    })
], ChatMainComponent);



/***/ }),

/***/ "./src/app/chat-room-select/chat-room-select.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/chat-room-select/chat-room-select.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-viewport {\n  height: 200px;\n  width: 100%;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n\n.inline {\n  display: inline;\n}\n\n.buttonSize {\n  font-size: 20px;\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n}\n\n.roomSelect {\n  grid-column: 1/2;\n  grid-row: 1;\n}\n\n.roomSettings {\n  grid-column: 2;\n  grid-row: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1yb29tLXNlbGVjdC9DOlxcVXNlcnNcXFZ1IFRydW9uZ1xcTmV4dGNsb3VkXFxQcm9qZWN0c1xcY2hhdHJvb20tYW5ndWxhci9zcmNcXGFwcFxcY2hhdC1yb29tLXNlbGVjdFxcY2hhdC1yb29tLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhdC1yb29tLXNlbGVjdC9jaGF0LXJvb20tc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtBQ0NKOztBREVFO0VBQ0ksZUFBQTtBQ0NOOztBREVBO0VBR0ksZUFBQTtBQ0RKOztBRElFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0FDREo7O0FESUU7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QUNGSjs7QURLRTtFQUVFLGNBQUE7RUFDQSxXQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jaGF0LXJvb20tc2VsZWN0L2NoYXQtcm9vbS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS12aWV3cG9ydCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuaW5saW5le1xyXG4gICAgICBkaXNwbGF5OmlubGluZVxyXG4gIH1cclxuXHJcbi5idXR0b25TaXple1xyXG5cclxuXHJcbiAgICBmb250LXNpemU6IDIwcHhcclxufVxyXG5cclxuICAud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7XHJcbiAgfVxyXG5cclxuICAucm9vbVNlbGVjdHtcclxuXHJcbiAgICBncmlkLWNvbHVtbjogMS8yO1xyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbiAgfVxyXG5cclxuICAucm9vbVNldHRpbmdze1xyXG5cclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbiAgfSIsIi5leGFtcGxlLXZpZXdwb3J0IHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uZXhhbXBsZS1pdGVtIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uYnV0dG9uU2l6ZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLWdhcDogMTBweDtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7XG59XG5cbi5yb29tU2VsZWN0IHtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZ3JpZC1yb3c6IDE7XG59XG5cbi5yb29tU2V0dGluZ3Mge1xuICBncmlkLWNvbHVtbjogMjtcbiAgZ3JpZC1yb3c6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/chat-room-select/chat-room-select.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/chat-room-select/chat-room-select.component.ts ***!
  \****************************************************************/
/*! exports provided: ChatRoomSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomSelectComponent", function() { return ChatRoomSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-db.service */ "./src/app/chat-db.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





let ChatRoomSelectComponent = class ChatRoomSelectComponent {
    constructor(chatDBService, authService) {
        this.chatDBService = chatDBService;
        this.authService = authService;
        this.room = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.usersWithRoomAndRights = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.roomsEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentRoom = null;
        this.rooms = [{ roomName: "Room1", users: [], voice: true, inviteRequired: false }, { roomName: "Room2", users: [], voice: true, inviteRequired: false }, { roomName: "Room3", users: [], voice: true, inviteRequired: false }, { roomName: "Room4", users: [], voice: true, inviteRequired: false }];
    }
    ngOnInit() {
        this.roomsEventEmitter.next(this.rooms);
        this.usersWithRoomAndRights.subscribe((users) => {
            if (users == null) {
                return;
            }
            this.rooms.forEach((room) => {
                room.users = [];
                users.forEach((user) => {
                    if (user.roomName == room.roomName) {
                        room.users.push(user);
                    }
                });
            });
        });
        this.chatDBService.registerOnMessageSubject((event => {
            switch (event.type) {
                case "RoomJoined":
                    break;
                case "RoomLeft":
                    break;
                case "InvitedOfRoomRequired":
                    this.changeInviteOfRoomRequired(event.value.roomName, event.value.inviteRequired);
                    break;
                case "VoiceInRoomRequired":
                    this.changeVoiceInRoomRequired(event.value.roomName, event.value.voice);
                    break;
            }
        }));
    }
    changeInviteOfRoomRequired(roomName, inviteRequired) {
        this.getRoomByRoomName(roomName).inviteRequired = inviteRequired;
    }
    changeVoiceInRoomRequired(roomName, voice) {
        this.getRoomByRoomName(roomName).voice = voice;
    }
    newRoomValue(room) {
        this.room.next(room);
        this.currentRoom = room;
        this.chatDBService.joinRoom(room);
    }
    leaveRoomButtonClicked(room) {
        this.chatDBService.leaveRoom(room);
    }
    getCurrentUserByRoom(room) {
        if (this.usersWithRoomAndRights.value == null) {
            return null;
        }
        return this.usersWithRoomAndRights.value.find((user) => {
            return user.roomName == room && user.email == this.authService.currentUserValue.email;
        });
    }
    getRoomByRoomName(roomName) {
        return this.rooms.find((room) => {
            return room.roomName == roomName;
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChatRoomSelectComponent.prototype, "room", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"])
], ChatRoomSelectComponent.prototype, "usersWithRoomAndRights", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChatRoomSelectComponent.prototype, "roomsEventEmitter", void 0);
ChatRoomSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-room-select',
        template: __webpack_require__(/*! raw-loader!./chat-room-select.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat-room-select/chat-room-select.component.html"),
        styles: [__webpack_require__(/*! ./chat-room-select.component.scss */ "./src/app/chat-room-select/chat-room-select.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_db_service__WEBPACK_IMPORTED_MODULE_2__["ChatDBService"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], ChatRoomSelectComponent);



/***/ }),

/***/ "./src/app/invite/invite.component.scss":
/*!**********************************************!*\
  !*** ./src/app/invite/invite.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52aXRlL0M6XFxVc2Vyc1xcVnUgVHJ1b25nXFxOZXh0Y2xvdWRcXFByb2plY3RzXFxjaGF0cm9vbS1hbmd1bGFyL3NyY1xcYXBwXFxpbnZpdGVcXGludml0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW52aXRlL2ludml0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9pbnZpdGUvaW52aXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iLCIuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/invite/invite.component.ts":
/*!********************************************!*\
  !*** ./src/app/invite/invite.component.ts ***!
  \********************************************/
/*! exports provided: InviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteComponent", function() { return InviteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _Classes_Validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Classes/Validation */ "./src/app/Classes/Validation.ts");
/* harmony import */ var _chat_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chat-db.service */ "./src/app/chat-db.service.ts");







let InviteComponent = class InviteComponent {
    constructor(dialogRef, data, dbService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dbService = dbService;
        this.userMailsInRoom = [];
        this.options = [];
        this.dbService.registerToOnlineUsersSubject(usersMailsOnline => {
            this.getUserMails();
            this.options = usersMailsOnline.filter(val => !this.userMailsInRoom.includes(val));
        });
    }
    ngOnInit() {
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_Classes_Validation__WEBPACK_IMPORTED_MODULE_5__["Validation"].isValidUser(this.options)]);
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    getUserMails() {
        this.data.users.forEach(val => {
            this.userMailsInRoom.push(val.email);
        });
    }
    getErrorMessage() {
        return this.myControl.hasError('selectedUser') ? 'Select user' :
            '';
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onSubmit() {
        const userToInvite = this.myControl.value;
        this.dialogRef.close(userToInvite);
    }
};
InviteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invite',
        template: __webpack_require__(/*! raw-loader!./invite.component.html */ "./node_modules/raw-loader/index.js!./src/app/invite/invite.component.html"),
        styles: [__webpack_require__(/*! ./invite.component.scss */ "./src/app/invite/invite.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _chat_db_service__WEBPACK_IMPORTED_MODULE_6__["ChatDBService"]])
], InviteComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxWdSBUcnVvbmdcXE5leHRjbG91ZFxcUHJvamVjdHNcXGNoYXRyb29tLWFuZ3VsYXIvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59IiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _chat_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat-db.service */ "./src/app/chat-db.service.ts");






let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authService, chatDBService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.chatDBService = chatDBService;
        this.chatDBService.registerOnMessageSubject(event => {
            if (event.type == "LogginFailed") {
                this.errorMsg = "Login Failed, pls retry";
                this.authService.clearTimer();
            }
        });
    }
    ngOnInit() {
        this.unsub = this.authService.currentUser.subscribe(user => {
            if (user) {
                this.router.navigateByUrl('chat');
            }
        });
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,4}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        const userCredentials = { password: this.f.password.value, email: this.f.email.value };
        this.authService.login(userCredentials);
    }
    ngOnDestroy() {
        this.unsub.unsubscribe();
    }
    resetErrorMsg() {
        this.errorMsg = "";
    }
    getErrorMessageEmail() {
        return this.loginForm.get('email').hasError('required') ? 'You must enter a value' :
            this.loginForm.get('email').hasError('pattern') ? 'Not a valid email' :
                '';
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _chat_db_service__WEBPACK_IMPORTED_MODULE_5__["ChatDBService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/people-in-room/people-in-room.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/people-in-room/people-in-room.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-viewport {\n  height: 200px;\n  width: 100%;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVvcGxlLWluLXJvb20vQzpcXFVzZXJzXFxWdSBUcnVvbmdcXE5leHRjbG91ZFxcUHJvamVjdHNcXGNoYXRyb29tLWFuZ3VsYXIvc3JjXFxhcHBcXHBlb3BsZS1pbi1yb29tXFxwZW9wbGUtaW4tcm9vbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGVvcGxlLWluLXJvb20vcGVvcGxlLWluLXJvb20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wZW9wbGUtaW4tcm9vbS9wZW9wbGUtaW4tcm9vbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXZpZXdwb3J0IHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pdGVtIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9IiwiLmV4YW1wbGUtdmlld3BvcnQge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5leGFtcGxlLWl0ZW0ge1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/people-in-room/people-in-room.component.ts":
/*!************************************************************!*\
  !*** ./src/app/people-in-room/people-in-room.component.ts ***!
  \************************************************************/
/*! exports provided: PeopleInRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleInRoomComponent", function() { return PeopleInRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-db.service */ "./src/app/chat-db.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




let PeopleInRoomComponent = class PeopleInRoomComponent {
    constructor(chatDBService, authService) {
        this.chatDBService = chatDBService;
        this.authService = authService;
        this.usersWithRoomAndRights = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.users = [];
    }
    ngOnInit() {
        this.chatDBService.registerOnMessageSubject((event => {
            let user;
            switch (event.type) {
                case "RoomJoined":
                    this.users.push({ name: event.value.name, email: event.value.email, roomName: event.value.roomName, op: false, voice: true });
                    this.update();
                    break;
                case "RoomLeft":
                    if (this.authService.currentUserValue.email == event.value.email) {
                        this.users = this.users.filter((element) => {
                            return !(element.roomName == event.value.roomName);
                        });
                        this.update();
                        break;
                    }
                    this.users = this.users.filter((element) => {
                        return !(element.email == event.value.email && element.roomName == event.value.roomName);
                    });
                    this.update();
                    break;
                case "OpGranted":
                    user = null;
                    user = this.users.find((user) => {
                        return user.email == event.value.email && user.roomName == event.value.roomName;
                    });
                    if (user != null) {
                        user.op = event.value.op;
                    }
                    this.update();
                    break;
                case "VoiceGranted":
                    user = null;
                    user = this.users.find((user) => {
                        return user.email == event.value.email && user.roomName == event.value.roomName;
                    });
                    if (user != null) {
                        user.voice = event.value.voice;
                    }
                    this.update();
                    break;
                case "UserRenamed":
                    this.users.forEach((user) => {
                        if (user.email == event.value.email) {
                            user.name = event.value.name;
                        }
                    });
                    this.update();
                    break;
                case "KickEvent":
                    this.leaveRoomBecauseOfKick(event.value.roomName, event.value.email);
                    break;
                case "InvitedToRoom":
                    //this.joinRoomBecauseOfInvite(event.value.roomName, event.value.email);
                    break;
            }
        }));
    }
    leaveRoomBecauseOfKick(roomName, email) {
        if (this.authService.currentUserValue.email == email)
            this.chatDBService.leaveRoom(roomName);
    }
    joinRoomBecauseOfInvite(roomName, userEmail) {
        if (userEmail == this.authService.currentUserValue.email) {
            this.chatDBService.joinRoom(roomName);
        }
    }
    getCurrentUserForRoom(room) {
        return this.users.find((user) => {
            return user.email == this.authService.currentUserValue.email && user.roomName == room;
        });
    }
    update() {
        this.usersWithRoomAndRights.next(this.users);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PeopleInRoomComponent.prototype, "usersWithRoomAndRights", void 0);
PeopleInRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-people-in-room',
        template: __webpack_require__(/*! raw-loader!./people-in-room.component.html */ "./node_modules/raw-loader/index.js!./src/app/people-in-room/people-in-room.component.html"),
        styles: [__webpack_require__(/*! ./people-in-room.component.scss */ "./src/app/people-in-room/people-in-room.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_db_service__WEBPACK_IMPORTED_MODULE_2__["ChatDBService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], PeopleInRoomComponent);



/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxWdSBUcnVvbmdcXE5leHRjbG91ZFxcUHJvamVjdHNcXGNoYXRyb29tLWFuZ3VsYXIvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iLCIuZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chat-db.service */ "./src/app/chat-db.service.ts");
/* harmony import */ var _Classes_Validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Classes/Validation */ "./src/app/Classes/Validation.ts");






let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, router, chatDBService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.chatDBService = chatDBService;
        this.chatDBService.registerOnMessageSubject((event) => {
            switch (event.type) {
                case "UserRegistered":
                    this.router.navigateByUrl("login");
                    break;
                default:
                    break;
            }
        });
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,4}$')]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_]*')]],
            password1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            password2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _Classes_Validation__WEBPACK_IMPORTED_MODULE_5__["Validation"].compareValidator('password1')]],
        });
    }
    get f() { return this.registerForm.controls; }
    onSubmit() {
        const userCredentials = { password: this.f.password1.value, email: this.f.email.value, name: this.f.name.value };
        this.chatDBService.registerUser(userCredentials.email, userCredentials.name, userCredentials.password);
    }
    getErrorMessageEmail() {
        return this.registerForm.get('email').hasError('required') ? 'You must enter a value' :
            this.registerForm.get('email').hasError('pattern') ? 'Not a valid email' :
                '';
    }
    getErrorMessageName() {
        return this.registerForm.get('name').hasError('required') ? 'You must enter a value' :
            this.registerForm.get('name').hasError('pattern') ? 'asdf_dd' :
                '';
    }
    getErrorMessagePW() {
        return this.registerForm.get('password2').hasError('required') ? 'You must enter a value' :
            this.registerForm.get('password2').hasError('compare') ? 'Password does not match' :
                '';
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _chat_db_service__WEBPACK_IMPORTED_MODULE_4__["ChatDBService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/room-settings/room-settings.component.scss":
/*!************************************************************!*\
  !*** ./src/app/room-settings/room-settings.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20tc2V0dGluZ3Mvcm9vbS1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/room-settings/room-settings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/room-settings/room-settings.component.ts ***!
  \**********************************************************/
/*! exports provided: RoomSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomSettingsComponent", function() { return RoomSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-db.service */ "./src/app/chat-db.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _invite_invite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../invite/invite.component */ "./src/app/invite/invite.component.ts");





let RoomSettingsComponent = class RoomSettingsComponent {
    constructor(chatdb, dialog) {
        this.chatdb = chatdb;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.currentRoomAndUsers = this.room;
        console.log(this.room);
    }
    setRommPrivate() {
        this.chatdb.setInviteRoom(this.room.roomName, true);
        this.inviteToRoom(this.currentUser.email);
    }
    setRoomPublic() {
        this.chatdb.setInviteRoom(this.room.roomName, false);
    }
    revokeVoiceFromRoom() {
        this.chatdb.setVoiceRoom(this.room.roomName, false);
    }
    setVoiceToRoom() {
        this.chatdb.setVoiceRoom(this.room.roomName, true);
    }
    inviteToRoom(mail) {
        this.chatdb.inviteToRoom(this.room.roomName, mail, true);
    }
    leaveRoom() {
        this.chatdb.leaveRoom(this.room.roomName);
    }
    openInviteDialog() {
        const dialogRef = this.dialog.open(_invite_invite_component__WEBPACK_IMPORTED_MODULE_4__["InviteComponent"], {
            width: '250px',
            data: this.currentRoomAndUsers
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.inviteToRoom(result);
            }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RoomSettingsComponent.prototype, "currentUser", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RoomSettingsComponent.prototype, "room", void 0);
RoomSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-room-settings',
        template: __webpack_require__(/*! raw-loader!./room-settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/room-settings/room-settings.component.html"),
        styles: [__webpack_require__(/*! ./room-settings.component.scss */ "./src/app/room-settings/room-settings.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_db_service__WEBPACK_IMPORTED_MODULE_2__["ChatDBService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], RoomSettingsComponent);



/***/ }),

/***/ "./src/app/siedebar/siedebar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/siedebar/siedebar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#toolbarMenu {\n  cursor: pointer;\n  margin-right: 20px;\n}\n\n.mat-icon-button {\n  margin-right: 20px;\n}\n\n#mainToolbar .toolbar-icon {\n  cursor: pointer;\n  margin: 0 8px;\n}\n\n#sidenavContainer {\n  height: 200px;\n  width: 304px;\n  min-width: 304px;\n  margin: 0;\n  margin-top: 64px;\n}\n\n#sidenav.menu-close {\n  width: 70px;\n}\n\n#sidenav.menu-close .mat-expansion-panel-header {\n  padding: 0;\n}\n\n#sidenav.menu-open mat-sidenav-content {\n  margin-left: 270px;\n}\n\n#sidenav.menu-open mat-list .menu-item:hover {\n  background: #eeeeee;\n}\n\n#sidenav.menu-close mat-list .menu-item mat-icon:hover {\n  background: #eeeeee;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n#sidenav.avatar {\n  background-image: url('hideout-favicon.png');\n  background-size: cover;\n}\n\n#sidenav mat-list .mat-list-item-content {\n  padding: 0 !important;\n}\n\n#sidenav mat-list .menu-item {\n  width: 100%;\n  border-radius: 0;\n  text-align: left;\n  padding: 10px;\n}\n\n#sidenav mat-list .menu-item-title {\n  width: 100%;\n  border-radius: 0;\n  text-align: left;\n  padding: 10px;\n}\n\n#sidenav mat-list .menu-item-title span {\n  font-size: 14px;\n  margin-left: 20px;\n}\n\n#sidenav mat-list .menu-item mat-icon {\n  margin-right: 20px;\n}\n\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {\n  background: white;\n}\n\n.dash-list h3 {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2llZGViYXIvQzpcXFVzZXJzXFxWdSBUcnVvbmdcXE5leHRjbG91ZFxcUHJvamVjdHNcXGNoYXRyb29tLWFuZ3VsYXIvc3JjXFxhcHBcXHNpZWRlYmFyXFxzaWVkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2llZGViYXIvc2llZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHRTtFQUNFLGtCQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdFO0VBRUUsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREtFO0VBQ0UsV0FBQTtBQ0ZKOztBREtFO0VBQ0UsVUFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7QUNGSjs7QURLRTtFQUNFLG1CQUFBO0FDRko7O0FES0U7RUFDRSxtQkFBQTtBQ0ZKOztBREtFO0VBQ0UsY0FBQTtBQ0ZKOztBREtFO0VBQ0UsNENBQUE7RUFDQSxzQkFBQTtBQ0ZKOztBREtFO0VBQ0UscUJBQUE7QUNGSjs7QURLRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBREtFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDRko7O0FES0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0FDRko7O0FES0U7RUFBd0csaUJBQUE7QUNEMUc7O0FESUU7RUFDRSxhQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9zaWVkZWJhci9zaWVkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b29sYmFyTWVudSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBcclxuICAubWF0LWljb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgI21haW5Ub29sYmFyIC50b29sYmFyLWljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAwIDhweDtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGVuYXZDb250YWluZXIge1xyXG5cclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMzA0cHg7XHJcbiAgICBtaW4td2lkdGg6IDMwNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNjRweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgI3NpZGVuYXYubWVudS1jbG9zZSB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGVuYXYubWVudS1jbG9zZSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGVuYXYubWVudS1vcGVuIG1hdC1zaWRlbmF2LWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tbGVmdDogMjcwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlbmF2Lm1lbnUtb3BlbiBtYXQtbGlzdCAubWVudS1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlbmF2Lm1lbnUtY2xvc2UgbWF0LWxpc3QgLm1lbnUtaXRlbSBtYXQtaWNvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG4gIH1cclxuICBcclxuICAuc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICBcclxuICAjc2lkZW5hdi5hdmF0YXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaGlkZW91dC1mYXZpY29uLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlbmF2IG1hdC1saXN0IC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAjc2lkZW5hdiBtYXQtbGlzdCAubWVudS1pdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAjc2lkZW5hdiBtYXQtbGlzdCAubWVudS1pdGVtLXRpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAjc2lkZW5hdiBtYXQtbGlzdCAubWVudS1pdGVtLXRpdGxlIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlbmF2IG1hdC1saXN0IC5tZW51LWl0ZW0gbWF0LWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKTpob3ZlciB7IGJhY2tncm91bmQ6IHdoaXRlOyB9XHJcbiAgXHJcbiAgXHJcbiAgLmRhc2gtbGlzdCBoMyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH0iLCIjdG9vbGJhck1lbnUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLm1hdC1pY29uLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuI21haW5Ub29sYmFyIC50b29sYmFyLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbiNzaWRlbmF2Q29udGFpbmVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDMwNHB4O1xuICBtaW4td2lkdGg6IDMwNHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG59XG5cbiNzaWRlbmF2Lm1lbnUtY2xvc2Uge1xuICB3aWR0aDogNzBweDtcbn1cblxuI3NpZGVuYXYubWVudS1jbG9zZSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4jc2lkZW5hdi5tZW51LW9wZW4gbWF0LXNpZGVuYXYtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAyNzBweDtcbn1cblxuI3NpZGVuYXYubWVudS1vcGVuIG1hdC1saXN0IC5tZW51LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xufVxuXG4jc2lkZW5hdi5tZW51LWNsb3NlIG1hdC1saXN0IC5tZW51LWl0ZW0gbWF0LWljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbiNzaWRlbmF2LmF2YXRhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2hpZGVvdXQtZmF2aWNvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbiNzaWRlbmF2IG1hdC1saXN0IC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbiNzaWRlbmF2IG1hdC1saXN0IC5tZW51LWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuI3NpZGVuYXYgbWF0LWxpc3QgLm1lbnUtaXRlbS10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jc2lkZW5hdiBtYXQtbGlzdCAubWVudS1pdGVtLXRpdGxlIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4jc2lkZW5hdiBtYXQtbGlzdCAubWVudS1pdGVtIG1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmRhc2gtbGlzdCBoMyB7XG4gIHBhZGRpbmc6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/siedebar/siedebar.component.ts":
/*!************************************************!*\
  !*** ./src/app/siedebar/siedebar.component.ts ***!
  \************************************************/
/*! exports provided: SiedebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiedebarComponent", function() { return SiedebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SiedebarComponent = class SiedebarComponent {
    constructor() {
        this.title = 'chatroom';
        this.admins = [
            { name: 'user1', state: 'online', status: 'carpe diem' },
            { name: 'user2', state: 'offline', status: 'hello world' },
            { name: 'user3', state: 'online', status: 'langeweile~' }
        ];
        this.isSidenavOpen = true;
        this.contentMargin = 297;
        this.expand = true;
        this.state = false;
    }
    onSidenavToggle() {
        this.isSidenavOpen = !this.isSidenavOpen;
        this.state = !this.state;
        if (!this.isSidenavOpen) {
            this.contentMargin = 100;
        }
        else {
            this.contentMargin = 297;
        }
        this.expand = !this.expand;
    }
    ngOnInit() {
    }
};
SiedebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-siedebar',
        template: __webpack_require__(/*! raw-loader!./siedebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/siedebar/siedebar.component.html"),
        styles: [__webpack_require__(/*! ./siedebar.component.scss */ "./src/app/siedebar/siedebar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SiedebarComponent);



/***/ }),

/***/ "./src/app/user-type/user-type.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-type/user-type.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItdHlwZS91c2VyLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-type/user-type.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-type/user-type.component.ts ***!
  \**************************************************/
/*! exports provided: UserTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTypeComponent", function() { return UserTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserTypeComponent = class UserTypeComponent {
    constructor() { }
    ngOnInit() {
    }
    getColor(user) {
        if (!user.voice && user.op) {
            return "yellow";
        }
        if (user.op && user.voice) {
            return "green";
        }
        if (user.voice && !user.op) {
            return "blue";
        }
        return "black";
    }
    getUserType(user) {
        if (!user.voice && user.op) {
            return "OP, No Voice";
        }
        if (user.op && user.voice) {
            return "OP and Voice";
        }
        if (user.voice && !user.op) {
            return "Voice";
        }
        return "No Rights";
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserTypeComponent.prototype, "user", void 0);
UserTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-type',
        template: __webpack_require__(/*! raw-loader!./user-type.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-type/user-type.component.html"),
        styles: [__webpack_require__(/*! ./user-type.component.scss */ "./src/app/user-type/user-type.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserTypeComponent);



/***/ }),

/***/ "./src/app/usersettings/usersettings.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/usersettings/usersettings.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzZXR0aW5ncy91c2Vyc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/usersettings/usersettings.component.ts":
/*!********************************************************!*\
  !*** ./src/app/usersettings/usersettings.component.ts ***!
  \********************************************************/
/*! exports provided: UsersettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersettingsComponent", function() { return UsersettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _change_pw_change_pw_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../change-pw/change-pw.component */ "./src/app/change-pw/change-pw.component.ts");
/* harmony import */ var _change_user_name_change_user_name_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../change-user-name/change-user-name.component */ "./src/app/change-user-name/change-user-name.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let UsersettingsComponent = class UsersettingsComponent {
    constructor(authService, dialog, router) {
        this.authService = authService;
        this.dialog = dialog;
        this.router = router;
    }
    ngOnInit() {
        this.unsub = this.authService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }
    ngOnDestroy() {
        this.unsub.unsubscribe();
    }
    logout() {
        this.authService.logout();
        this.router.navigateByUrl("/login");
    }
    openDialogChangePW() {
        const dialogRef = this.dialog.open(_change_pw_change_pw_component__WEBPACK_IMPORTED_MODULE_4__["ChangePWComponent"], {
            width: '250px',
            data: this.currentUser
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result.passwordChanged) {
                this.authService.logout();
                this.router.navigateByUrl("/login");
            }
        });
    }
    openDialogChangeUserName() {
        const dialogRef = this.dialog.open(_change_user_name_change_user_name_component__WEBPACK_IMPORTED_MODULE_5__["ChangeUserNameComponent"], {
            width: '250px',
            data: this.currentUser
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
            }
        });
    }
};
UsersettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usersettings',
        template: __webpack_require__(/*! raw-loader!./usersettings.component.html */ "./node_modules/raw-loader/index.js!./src/app/usersettings/usersettings.component.html"),
        styles: [__webpack_require__(/*! ./usersettings.component.scss */ "./src/app/usersettings/usersettings.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], UsersettingsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Vu Truong\Nextcloud\Projects\chatroom-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map