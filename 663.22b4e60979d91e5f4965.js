"use strict";(self.webpackChunkcovid19_greece_dashboard=self.webpackChunkcovid19_greece_dashboard||[]).push([[663],{8663:(Vn,oe,l)=>{l.r(oe),l.d(oe,{GlobalNewsModule:()=>vn});var y=l(881),o=l(639),m=l(8583),at=l(4402),lt=l(5758),ut=l(8002);let ie=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),_=(()=>{class n extends ie{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const d=new o.OlP("NgValueAccessor"),dt={provide:d,useExisting:(0,o.Gpc)(()=>T),multi:!0},ft=new o.OlP("CompositionEventMode");let T=(()=>{class n extends ie{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const n=(0,m.q)()?(0,m.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(ft,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([dt]),o.qOj]}),n})();const u=new o.OlP("NgValidators"),f=new o.OlP("NgAsyncValidators");function me(n){return null!=n}function _e(n){const t=(0,o.QGY)(n)?(0,at.D)(n):n;return(0,o.CqO)(t),t}function ye(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function Ce(n,t){return t.map(e=>e(n))}function ve(n){return n.map(t=>function(n){return!n.validate}(t)?t:e=>t.validate(e))}function k(n){return null!=n?function(n){if(!n)return null;const t=n.filter(me);return 0==t.length?null:function(e){return ye(Ce(e,t))}}(ve(n)):null}function P(n){return null!=n?function(n){if(!n)return null;const t=n.filter(me);return 0==t.length?null:function(e){const r=Ce(e,t).map(_e);return(0,lt.D)(r).pipe((0,ut.U)(ye))}}(ve(n)):null}function Me(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function be(n){return n._rawValidators}function De(n){return n._rawAsyncValidators}function I(n){return n?Array.isArray(n)?n:[n]:[]}function E(n,t){return Array.isArray(n)?n.includes(t):n===t}function Ee(n,t){const e=I(t);return I(n).forEach(i=>{E(e,i)||e.push(i)}),e}function we(n,t){return I(t).filter(e=>!E(n,e))}let Oe=(()=>{class n{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=k(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=P(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,r){return!!this.control&&this.control.hasError(e,r)}getError(e,r){return this.control?this.control.getError(e,r):null}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n}),n})();class g extends Oe{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}let Ne=(()=>{class n extends class{constructor(t){this._cd=t}is(t){var e,r,i;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(i=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===i?void 0:i[t])}}{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(g,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[o.qOj]}),n})();function v(n,t){(function(n,t){const e=be(n);null!==t.validator?n.setValidators(Me(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=De(n);null!==t.asyncValidator?n.setAsyncValidators(Me(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();N(t._rawValidators,i),N(t._rawAsyncValidators,i)})(n,t),t.valueAccessor.writeValue(n.value),function(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Se(n,t)})}(n,t),function(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Se(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function F(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),function(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=be(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=De(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};N(t._rawValidators,r),N(t._rawAsyncValidators,r)}(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function N(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Se(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function G(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const V="VALID",x="INVALID",C="PENDING",A="DISABLED";function Y(n){return($(n)?n.validators:n)||null}function Be(n){return Array.isArray(n)?k(n):n||null}function L(n,t){return($(t)?t.asyncValidators:n)||null}function Te(n){return Array.isArray(n)?P(n):n||null}function $(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class W{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Be(this._rawValidators),this._composedAsyncValidatorFn=Te(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===V}get invalid(){return this.status===x}get pending(){return this.status==C}get disabled(){return this.status===A}get enabled(){return this.status!==A}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Be(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=Te(t)}addValidators(t){this.setValidators(Ee(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Ee(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(we(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(we(t,this._rawAsyncValidators))}hasValidator(t){return E(this._rawValidators,t)}hasAsyncValidator(t){return E(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=C,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=A,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=V,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===V||this.status===C)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:V}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const e=_e(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(".")),Array.isArray(t)&&0===t.length))return null;let r=n;return t.forEach(i=>{r=r instanceof z?r.controls.hasOwnProperty(i)?r.controls[i]:null:r instanceof Ot&&r.at(i)||null}),r}(this,t)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(x)?x:V}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){$(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class M extends W{constructor(t=null,e,r){super(Y(e),L(r,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){G(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){G(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class z extends W{constructor(t,e,r){super(Y(e),L(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(r=>{this._throwIfControlMissing(r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e instanceof M?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const r=this.controls[e];if(this.contains(e)&&t(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,r)=>((e.enabled||this.disabled)&&(t[r]=e.value),t))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,r)=>{if(void 0===t[r])throw new Error(`Must supply a value for form control with name: '${r}'.`)})}}class Ot extends W{constructor(t,e,r){super(Y(e),L(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((r,i)=>{this._throwIfControlMissing(i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof M?t.value:t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,r)=>{if(void 0===t[r])throw new Error(`Must supply a value for form control at index: ${r}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}let je=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const Z=new o.OlP("NgModelWithFormControlWarning"),Pt={provide:g,useExisting:(0,o.Gpc)(()=>Q)};let Q=(()=>{class n extends g{constructor(e,r,i,s){super(),this._ngModelWarningConfig=s,this.update=new o.vpe,this._ngModelWarningSent=!1,this._setValidators(e),this._setAsyncValidators(r),this.valueAccessor=function(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===T?e=s:function(n){return Object.getPrototypeOf(n.constructor)===_}(s)?r=s:i=s}),i||r||e||null}(0,i)}set isDisabled(e){}ngOnChanges(e){if(this._isControlChanged(e)){const r=e.form.previousValue;r&&F(r,this,!1),v(this.form,this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this.form.updateValueAndValidity({emitEvent:!1})}(function(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)})(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&F(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,10),o.Y36(f,10),o.Y36(d,10),o.Y36(Z,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControl",""]],inputs:{isDisabled:["disabled","isDisabled"],form:["formControl","form"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[o._Bn([Pt]),o.qOj,o.TTD]}),n._ngModelWarningSentOnce=!1,n})();const Ht={provide:d,useExisting:(0,o.Gpc)(()=>B),multi:!0};function $e(n,t){return null==n?`${t}`:(t&&"object"==typeof t&&(t="Object"),`${n}: ${t}`.slice(0,50))}let B=(()=>{class n extends _{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;const r=this._getOptionId(e);null==r&&this.setProperty("selectedIndex",-1);const i=$e(r,e);this.setProperty("value",i)}registerOnChange(e){this.onChange=r=>{this.value=this._getOptionValue(r),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(const r of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(r),e))return r;return null}_getOptionValue(e){const r=function(n){return n.split(":")[0]}(e);return this._optionMap.has(r)?this._optionMap.get(r):e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(e,r){1&e&&o.NdJ("change",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[o._Bn([Ht]),o.qOj]}),n})(),We=(()=>{class n{constructor(e,r,i){this._element=e,this._renderer=r,this._select=i,this._select&&(this.id=this._select._registerOption())}set ngValue(e){null!=this._select&&(this._select._optionMap.set(this.id,e),this._setElementValue($e(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(B,9))},n.\u0275dir=o.lG2({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),n})();const Yt={provide:d,useExisting:(0,o.Gpc)(()=>te),multi:!0};function ze(n,t){return null==n?`${t}`:("string"==typeof t&&(t=`'${t}'`),t&&"object"==typeof t&&(t="Object"),`${n}: ${t}`.slice(0,50))}let te=(()=>{class n extends _{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){let r;if(this.value=e,Array.isArray(e)){const i=e.map(s=>this._getOptionId(s));r=(s,a)=>{s._setSelected(i.indexOf(a.toString())>-1)}}else r=(i,s)=>{i._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(e){this.onChange=r=>{const i=[];if(void 0!==r.selectedOptions){const s=r.selectedOptions;for(let a=0;a<s.length;a++){const D=s.item(a),re=this._getOptionValue(D.value);i.push(re)}}else{const s=r.options;for(let a=0;a<s.length;a++){const D=s.item(a);if(D.selected){const re=this._getOptionValue(D.value);i.push(re)}}}this.value=i,e(i)}}_registerOption(e){const r=(this._idCounter++).toString();return this._optionMap.set(r,e),r}_getOptionId(e){for(const r of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(r)._value,e))return r;return null}_getOptionValue(e){const r=function(n){return n.split(":")[0]}(e);return this._optionMap.has(r)?this._optionMap.get(r)._value:e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(e,r){1&e&&o.NdJ("change",function(s){return r.onChange(s.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[o._Bn([Yt]),o.qOj]}),n})(),Je=(()=>{class n{constructor(e,r,i){this._element=e,this._renderer=r,this._select=i,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){null!=this._select&&(this._value=e,this._setElementValue(ze(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(ze(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(te,9))},n.\u0275dir=o.lG2({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),n})(),it=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[je]]}),n})(),en=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[it]}),n})(),tn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Z,useValue:e.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[it]}),n})();var nn=l(4466),rn=l(3190),on=l(2996);const sn=[{name:"\u0395\u03bb\u03bb\u03ac\u03b4\u03b1",code:"gr"},{name:"\u0397\u03bd\u03c9\u03bc\u03ad\u03bd\u03b1 \u0391\u03c1\u03b1\u03b2\u03b9\u03ba\u03ac \u0395\u03bc\u03b9\u03c1\u03ac\u03c4\u03b1",code:"ae"},{name:"\u0391\u03c1\u03b3\u03b5\u03bd\u03c4\u03b9\u03bd\u03ae",code:"ar"},{name:"\u0391\u03c5\u03c3\u03c4\u03c1\u03af\u03b1",code:"at"},{name:"\u0391\u03c5\u03c3\u03c4\u03c1\u03b1\u03bb\u03af\u03b1",code:"au"},{name:"\u0392\u03ad\u03bb\u03b3\u03b9\u03bf",code:"be"},{name:"\u0392\u03bf\u03c5\u03bb\u03b3\u03b1\u03c1\u03af\u03b1",code:"bg"},{name:"\u039a\u03b1\u03bd\u03b1\u03b4\u03ac\u03c2",code:"ca"},{name:"\u0395\u03bb\u03b2\u03b5\u03c4\u03af\u03b1",code:"ch"},{name:"\u039a\u03af\u03bd\u03b1",code:"cn"},{name:"\u039a\u03bf\u03bb\u03bf\u03bc\u03b2\u03af\u03b1",code:"co"},{name:"\u039a\u03bf\u03cd\u03b2\u03b1",code:"cu"},{name:"\u03a4\u03c3\u03b5\u03c7\u03af\u03b1",code:"cz"},{name:"\u0393\u03b5\u03c1\u03bc\u03b1\u03bd\u03af\u03b1",code:"de"},{name:"\u0391\u03af\u03b3\u03c5\u03c0\u03c4\u03bf\u03c2",code:"eg"},{name:"\u0393\u03b1\u03bb\u03bb\u03af\u03b1",code:"fr"},{name:"\u0397\u03bd\u03c9\u03bc\u03ad\u03bd\u03bf \u0392\u03b1\u03c3\u03af\u03bb\u03b5\u03b9\u03bf",code:"gb"},{name:"\u03a7\u03bf\u03bd\u03b3\u03ba \u039a\u03bf\u03bd\u03b3\u03ba",code:"hk"},{name:"\u039f\u03c5\u03b3\u03b3\u03b1\u03c1\u03af\u03b1",code:"hu"},{name:"\u0399\u03bd\u03b4\u03bf\u03bd\u03b7\u03c3\u03af\u03b1",code:"id"},{name:"\u0399\u03c1\u03bb\u03b1\u03bd\u03b4\u03af\u03b1",code:"ie"},{name:"\u0399\u03c3\u03c1\u03b1\u03ae\u03bb",code:"il"},{name:"\u0399\u03c4\u03b1\u03bb\u03af\u03b1",code:"it"},{name:"\u0399\u03b1\u03c0\u03c9\u03bd\u03af\u03b1",code:"jp"},{name:"\u039d\u03cc\u03c4\u03b9\u03b1 \u039a\u03bf\u03c1\u03ad\u03b1",code:"kr"},{name:"\u039b\u03b9\u03b8\u03bf\u03c5\u03b1\u03bd\u03af\u03b1",code:"lt"},{name:"\u039b\u03b5\u03c4\u03bf\u03bd\u03af\u03b1",code:"lv"},{name:"\u039c\u03b1\u03c1\u03cc\u03ba\u03bf",code:"ma"},{name:"\u039c\u03b5\u03be\u03b9\u03ba\u03cc",code:"mx"},{name:"\u039c\u03b1\u03bb\u03b1\u03b9\u03c3\u03af\u03b1",code:"my"},{name:"\u039d\u03b9\u03b3\u03b7\u03c1\u03af\u03b1",code:"ng"},{name:"\u039f\u03bb\u03bb\u03b1\u03bd\u03b4\u03af\u03b1",code:"nl"},{name:"\u039d\u03ad\u03b1 \u0396\u03b7\u03bb\u03b1\u03bd\u03b4\u03af\u03b1",code:"nz"},{name:"\u03a6\u03b9\u03bb\u03b9\u03c0\u03c0\u03af\u03bd\u03b5\u03c2",code:"ph"},{name:"\u03a0\u03bf\u03bb\u03c9\u03bd\u03af\u03b1",code:"pl"},{name:"\u03a0\u03bf\u03c1\u03c4\u03bf\u03b3\u03b1\u03bb\u03af\u03b1",code:"pt"},{name:"\u03a1\u03bf\u03c5\u03bc\u03b1\u03bd\u03af\u03b1",code:"ro"},{name:"\u03a3\u03b5\u03c1\u03b2\u03af\u03b1",code:"rs"},{name:"\u03a1\u03c9\u03c3\u03c3\u03af\u03b1",code:"ru"},{name:"\u039d\u03cc\u03c4\u03b9\u03b1 \u0391\u03c6\u03c1\u03b9\u03ba\u03ae",code:"sa"},{name:"\u03a3\u03bf\u03c5\u03b7\u03b4\u03af\u03b1",code:"se"},{name:"\u03a3\u03b9\u03b3\u03ba\u03b1\u03c0\u03bf\u03cd\u03c1\u03b7",code:"sg"},{name:"\u03a3\u03bb\u03bf\u03b2\u03b5\u03bd\u03af\u03b1",code:"si"},{name:"\u03a3\u03bb\u03bf\u03b2\u03b1\u03ba\u03af\u03b1",code:"sk"},{name:"\u03a4\u03b1\u03ca\u03bb\u03ac\u03bd\u03b4\u03b7",code:"th"},{name:"\u03a4\u03bf\u03c5\u03c1\u03ba\u03af\u03b1",code:"tr"},{name:"\u03a4\u03b1\u03ca\u03b2\u03ac\u03bd",code:"tw"},{name:"\u039f\u03c5\u03ba\u03c1\u03b1\u03bd\u03af\u03b1",code:"ua"},{name:"\u0397\u03bd\u03c9\u03bc\u03ad\u03bd\u03b5\u03c2 \u03a0\u03bf\u03bb\u03b9\u03c4\u03b5\u03af\u03b5\u03c2",code:"us"},{name:"\u0392\u03b5\u03bd\u03b5\u03b6\u03bf\u03c5\u03ad\u03bb\u03b1",code:"ve"},{name:"\u039d\u03cc\u03c4\u03b9\u03b1 \u0391\u03c6\u03c1\u03b9\u03ba\u03ae",code:"za"}];var an=l(388),ln=l(7709),st=l(6782);function un(n,t){if(1&n&&(o.TgZ(0,"option",5),o._uU(1),o.qZA()),2&n){const e=t.$implicit;o.Q6J("value",e.code),o.xp6(1),o.AsE("",e.name," (",e.code,")")}}function cn(n,t){if(1&n&&(o.TgZ(0,"span",6),o._uU(1),o.qZA()),2&n){const e=o.oxw();o.xp6(1),o.hij(" ",e.numberOfArticles,"\n")}}let dn=(()=>{class n{constructor(e,r){this.router=e,this.route=r,this.countryControl=new M("gr"),this.destroy$=new ln.xQ}ngOnInit(){this.countryControl.valueChanges.pipe((0,st.R)(this.destroy$)).subscribe(e=>{this.router.navigate(["./"],{relativeTo:this.route,queryParams:{country:e}})}),this.route.queryParams.pipe((0,st.R)(this.destroy$)).subscribe(e=>{0!==this.countries.filter(r=>r.code===e.country).length?this.countryControl.patchValue(e.country):this.countryControl.patchValue("gr")})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(y.F0),o.Y36(y.gz))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-country-selector"]],inputs:{numberOfArticles:"numberOfArticles",countries:"countries"},decls:6,vars:3,consts:[[1,"mr-3"],[1,"select","is-primary"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["class","ml-3 is-size-6 has-text-weight-bold number-of-articles",4,"ngIf"],[3,"value"],[1,"ml-3","is-size-6","has-text-weight-bold","number-of-articles"]],template:function(e,r){1&e&&(o.TgZ(0,"span",0),o._uU(1,"\u0395\u03c0\u03ad\u03bb\u03b5\u03be\u03b5 \u03c7\u03ce\u03c1\u03b1:"),o.qZA(),o.TgZ(2,"div",1),o.TgZ(3,"select",2),o.YNc(4,un,2,3,"option",3),o.qZA(),o.qZA(),o.YNc(5,cn,2,1,"span",4)),2&e&&(o.xp6(3),o.Q6J("formControl",r.countryControl),o.xp6(1),o.Q6J("ngForOf",r.countries),o.xp6(1),o.Q6J("ngIf",0!==r.numberOfArticles))},directives:[B,Ne,Q,m.sg,m.O5,We,Je],styles:["[_nghost-%COMP%]{display:flex;align-items:center}.select[_ngcontent-%COMP%]{width:160px}@media (min-width: 500px){.select[_ngcontent-%COMP%]{width:230px}}"],changeDetection:0}),n})();var hn=l(8650);function fn(n,t){1&n&&o._UZ(0,"app-article",4),2&n&&o.Q6J("article",t.$implicit)}function pn(n,t){if(1&n&&(o.ynx(0),o.YNc(1,fn,1,1,"app-article",3),o.BQk()),2&n){const e=o.oxw();o.xp6(1),o.Q6J("ngForOf",e.articles)}}function gn(n,t){1&n&&(o.TgZ(0,"div",5),o.TgZ(1,"p",6),o._uU(2,"\u0394\u0395\u03a5\u03a0\u0391\u03a1\u03a7\u039f\u03a5\u039d \u039d\u0395\u0391 \u0393\u0399\u0391 \u03a4\u0397 \u03a7\u03a9\u03a1\u0391 \u03a0\u039f\u03a5 \u0395\u03a0\u0399\u039b\u0395\u039e\u0391\u03a4\u0395!"),o.qZA(),o.qZA())}let mn=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-news"]],inputs:{articles:"articles"},decls:4,vars:2,consts:[[1,"container","py-3"],[4,"ngIf","ngIfElse"],["noArticles",""],[3,"article",4,"ngFor","ngForOf"],[3,"article"],[1,"is-flex","is-justify-content-center","is-align-items-center","has-background-white-ter","no-articles-section"],[1,"is-italic","has-text-weight-medium","has-text-centered","is-size-5","px-3\u039d"]],template:function(e,r){if(1&e&&(o.TgZ(0,"div",0),o.YNc(1,pn,2,1,"ng-container",1),o.YNc(2,gn,3,0,"ng-template",null,2,o.W1O),o.qZA()),2&e){const i=o.MAs(3);o.xp6(1),o.Q6J("ngIf",r.articles.length>0)("ngIfElse",i)}},directives:[m.O5,m.sg,hn.t],styles:[".container[_ngcontent-%COMP%]{width:100%}.no-articles-section[_ngcontent-%COMP%]{height:250px;border-radius:4px}"],changeDetection:0}),n})();var _n=l(605);function yn(n,t){1&n&&o._UZ(0,"app-loader")}let Cn=(()=>{class n{constructor(e,r,i){this.covidNewsService=e,this.route=r,this.router=i,this.articles=[],this.isGlobalNewsDataLoading=!0}ngOnInit(){this.countries=sn,this.paramsSubscription$=this.route.queryParams.pipe((0,rn.w)(e=>0===this.countries.filter(r=>r.code===e.country).length?this.covidNewsService.getCovidNews("gr"):this.covidNewsService.getCovidNews(e.country)),(0,on.j)("articles")).subscribe(e=>{this.articles=e,this.numberOfArticles=e.length,this.isGlobalNewsDataLoading=!1},e=>this.isGlobalNewsDataLoading=!1)}ngOnDestroy(){var e;null===(e=this.paramsSubscription$)||void 0===e||e.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(an.l),o.Y36(y.gz),o.Y36(y.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-global-news"]],decls:6,vars:4,consts:[[1,"container","is-flex","is-flex-direction-column","py-3"],[1,"title","is-4","mb-5","has-text-centered"],[3,"countries","numberOfArticles"],[3,"articles"],[4,"ngIf"]],template:function(e,r){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"h2",1),o._uU(2,"\u03a0\u0391\u0393\u039a\u039f\u03a3\u039c\u0399\u0391 \u039d\u0395\u0391 \u0393\u0399\u0391 \u03a4\u039f\u039d \u039a\u039f\u03a1\u03a9\u039d\u039f\u03aa\u039f"),o.qZA(),o._UZ(3,"app-country-selector",2),o._UZ(4,"app-news",3),o.qZA(),o.YNc(5,yn,1,0,"app-loader",4)),2&e&&(o.xp6(3),o.Q6J("countries",r.countries)("numberOfArticles",r.numberOfArticles),o.xp6(1),o.Q6J("articles",r.articles),o.xp6(1),o.Q6J("ngIf",r.isGlobalNewsDataLoading))},directives:[dn,mn,m.O5,_n.R],styles:[".container[_ngcontent-%COMP%]{height:100%}"]}),n})(),vn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({providers:[],imports:[[y.Bz.forChild([{path:"",component:Cn}]),en,tn,nn.m],y.Bz]}),n})()}}]);